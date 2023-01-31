import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navBarData } from '@/Data/data';

const NavBar = () => {
  return (
    <div className='bg-brand-secondary-light text-white h-[80px]'>
      <div className='px-4 mx-auto max-w-7xl h-full'>
        <nav className='relative z-20 h-full flex items-center justify-between w-full py-2 font-medium'>
          <div className=''>
            <Link href="/" className='w-1/4 cursor-pointer'>
              <div>
                <Image src='/naapslogo.png' alt='Logo' width='40' height='40'/>
              </div>
            </Link>
          </div>
          <div>
              <div className='flex justify-end md:hidden w-3/4'>
                <svg width="30" height="25" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg" ><rect y="14" width="14" height="3" rx="1.5" fill="currentColor"></rect> <rect y="7" width="24" height="3" rx="1.5" fill="currentColor"></rect> <rect width="20" height="3" rx="1.5" fill="currentColor"></rect></svg>
              </div>
              <div className='flex justify-end md:hidden w-3/4'>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line> <line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </div>
          </div>
          <div className='items-center justify-between hidden w-3/4 md:flex'>
            <ul className='flex items-center justify-between w-1/3'>
              <Link href='/'>
                About Us
              </Link>
              { navBarData.map((data) => {
                return (
                  <li key={data.id} className='relative'>
                    <div className='flex items-center justify-between space-x-2 cursor-pointer md:justify-start '>
                      <div>{data.linkName}</div>
                      <div className='transition transform'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                      </div>
                    </div>
                    <div className='text-gray-900'>
                      <div className='absolute z-20 inline-block w-3 h-5 transform rotate-45 bg-white border border-gray-100 shadow left-2 top-10'></div>
                      <div className='absolute z-20 py-3 bg-white rounded shadow w-72 -left-12 top-12'>
                        {data.subLinks.map((subLink) => {
                          return (
                            <div key={subLink.id} className='px-5 py-2'>
                              <Link href={`/${subLink.linkAddress}`}>
                                <div className='flex items-center space-x-3 cursor-pointer hover:font-bold'>
                                  <div>

                                  </div>
                                  <div>
                                    {subLink.linkName}
                                  </div>
                                </div>
                              </Link>
                            </div>

                          )
                        }) }
                      </div>
                    </div>
                  </li>
                )
                
              })}
              <Link href='/news'>News</Link>
              <Link href='/faqs'>Faqs</Link>
            </ul>
            <div className='flex justify-end items-center space-x-8'>
              <Link href='/auth' className='cursor-pointer'>Log In</Link>
                <div className='relative flex items-center justify-center'>
                  <Link href='/donate' className='w-full px-6 py-3 font-medium text-brand-secondary-light bg-white rounded-lg text-sm cursor-pointer'>Donate</Link>
                </div>
                <div className='relative flex items-center justify-center'>
                  <Link href='/become-a-member' className='w-full px-6 py-3 font-medium text-brand-secondary-light bg-white rounded-lg text-sm cursor-pointer'>Become a Member</Link>
                </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar