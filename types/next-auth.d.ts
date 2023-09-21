import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    username: string,
    id: string
  }
  interface Session {
    user: {
      user: User & {
        username: string,
        id: string
      }
      token: {
        username: string,
        id: string
      }
    }
  }
}

// import { DefaultSession } from "next-auth";

// declare module "next-auth" {
//   interface Session {
//     token: {
//       username: string
//       id: string
//     }
//     user: {
//       username: string,
//       id: string;
//     } & DefaultSession["user"];
//   }
// }