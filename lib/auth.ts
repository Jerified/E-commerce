import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./prisma";
import { compare } from "bcrypt";
import { Adapter } from "next-auth/adapters";
import { env } from "./schema";
import { PrismaClient } from "@prisma/client";
import { mergeAnonymousCartIntoUserCart } from "./cart";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/signin'
    },
  providers: [
   GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret:process.env.GOOGLE_CLIENT_SECRET ?? ''
   }),
    CredentialsProvider({
  
      name: "Credentials",
    
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
         if(!credentials?.email || !credentials.password) {
            throw new Error('Please enter an email and password')
         }

         const existingUser = await prisma.user.findUnique({
            where: { email: credentials?.email}
         })

         if (!existingUser || !existingUser.password) {
            throw new Error ('No user found')
         }

         const passwordMatch = await compare(credentials.password, existingUser.password)

         if (!passwordMatch) {
            throw new Error('Incorrect password')
         }

         return {
            id: `${existingUser.id}`,
            username: existingUser.username,
            email: existingUser.email
         }
  
      }
    })
  ],

  callbacks: {
   async jwt ({token, user}) {
      if(user) {
         token.id = user.id
         return {
            ...token,
            username: user.username,
            id: user.id
         }
      }
      // console.log(token, user, account, profile, isNewUser)
      return token
   },
   async session ({session, token, user}) {
      session.user.token.id = user.id
      return {
         ...session,
         user: {
            ...session.user,
            username: token.username 
         }
      }
   }
  },
  events: {
   async signIn({ user }) {
     await mergeAnonymousCartIntoUserCart(user.id);
   },
 },
}

export default NextAuth(authOptions)