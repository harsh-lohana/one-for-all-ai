import { SignInButton, UserButton, currentUser } from '@clerk/nextjs'
import {User} from "@clerk/nextjs/api"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

async function Navbar() {
  const user: User | null = await currentUser();
  return (
    <nav className="flex w-screen items-center justify-between p-6">
      <div>
        <Link href="/" className="text-2xl font-bold text-blue-500 no-underline">
          One For All AI
        </Link>
      </div>
      <div className="text-blue-500 font-semibold text-lg">
        {
          user ? <div className="flex flex-row gap-x-4 items-center">
            <Link href="/app">
              <Button variant="outline">Open App</Button>
            </Link>
            <UserButton />
          </div> : <SignInButton />
        }
      </div>
    </nav>
  )
}

export default Navbar
