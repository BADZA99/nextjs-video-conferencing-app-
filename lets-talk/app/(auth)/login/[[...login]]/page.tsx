import { SignIn } from '@clerk/nextjs'
import { neobrutalism } from '@clerk/themes'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <main className='flex flex-col items-center p-5 gap-10 animate-fade-in'>
        <section className="flex flex-col items-center">
            <Image
                src="/assets/logo.svg"
                alt="Logo"
                width={100}
                height={100}

            />
            <h1 className="text-lg font-extrabold  lg:text-2xl">
                connect , communicate and share your ideas with the world
            </h1>
        </section>
        <div className="mt-3">
            <SignIn 
                appearance={
                    {
                        baseTheme: neobrutalism
                    }
                }
            />
        </div>
      
    </main>
  )
}
