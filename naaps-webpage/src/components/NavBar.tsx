import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  return (
    <div className='bg-brand-secondary-light text-white'>
      <div className='px-4 mx-auto '>
        <nav className='relative z-20 flex items-center justify-between w-full py-2 font-medium'>
          <div>
            <Link href="/">
              <div>
                <Image src='/naapslogo.png' alt='Logo' width='40' height='40'/>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar