import React from 'react'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className='flex items-center justify-between border-2 border-amber-50 py-4 px-20 p-2'>
       {/* left part */}
        <div>
            <h1 className='text-4xl font-semibold'>Wanderwise</h1>
        </div>

        {/* right part */}
        <div className='flex items-center gap-16'>
            <nav className='space-x-10 text-xl font-medium [&>a]:hover:text-purple-600'>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>

            </nav>

            <CustomButton text="Login" link="/login" />

        </div>
    </header>
  )
}

export default Navbar