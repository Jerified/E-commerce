import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { hash } from "bcrypt";
import { schema } from "@/lib/schema";

export async function POST(req:Request) {
    try {
        const body = await req.json()
        const {email, username, password} = schema.parse(body)

        const existingUserByEmail = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (existingUserByEmail) {
            return NextResponse.json({user: null, message: 'User with this email already exist'}, {status: 409})
            
        }

        const existingUserByUsername = await prisma.user.findUnique({
            where: {
                username
            }
        })

        if (existingUserByUsername) {
            return NextResponse.json({user: null, message: 'User with this username already exist'}, {status: 409})
        }

        const hashedPassword = await hash(password, 10)

        const newUser = prisma.user.create({
            data: {
                email,
                username,
                password: hashedPassword
            }
        })

        const {password: newUserPassword, ...rest} = newUser

        return NextResponse.json({user: rest, message: 'user created successfully'}, {status: 201})

    } catch (error) {
        return NextResponse.json({ message: 'Something went wrong'}, {status: 500})
    }
}