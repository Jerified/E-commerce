import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth/next'

export default async function Home() {
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <main className="">
      hello
    </main>
  )
}
