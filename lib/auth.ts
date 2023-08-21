import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./prisma";
import { compare } from "bcrypt";

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
    CredentialsProvider({
  
      name: "Credentials",
    
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
         if(!credentials?.email || !credentials.password) {
            return null
         }

         const existingUser = await prisma.user.findUnique({
            where: { email: credentials?.email}
         })

         if (!existingUser) {
            return null
         }

         const passwordMatch = await compare(credentials.password, existingUser.password)

         if (!passwordMatch) {
            return null
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
         return {
            ...token,
            username: user.username
         }
      }
      // console.log(token, user, account, profile, isNewUser)
      return token
   },
   async session ({session, token}) {
      return {
         ...session,
         user: {
            ...session.user,
            username: token.username
         }
      }
      return session
      // console.log(session, user);
     
      
   }

  }
}

export default NextAuth(authOptions)