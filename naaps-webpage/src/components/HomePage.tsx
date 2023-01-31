import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='relative'>
      <div className='pb-20 text-brand-primary'>
        <div className='relative bg-brand-secondary-light md:px-0'>
          <div className='relative flex flex-col items-center justify-center px-6 py-32 mx-auto text-center text-white max-w-7xl'>
            <div className='font-bold'>NAAPS</div>
            <div className='py-6 text-3xl font-bold md:text-5xl'>
              National Association of Applied Physics Student
              <br/>
              Bedrock of Technology
            </div>
            <div className='z-10'>
              NAAPS is an student association of the entire students of the <strong>Department of Physics</strong> at <br /> <strong>Federal University of Technology Akure (FUTA) </strong>,
              have firmly, solemly and unanimously resolved <br /> to come together  in unity and harmony in order to achieve our goals and objectives towards uplifting of <br /> physics department, and its application to solve social and economic problems prevailing in the country.

            </div>
            <div className='md:flex  items-center pt-16 pb-20'>
              <div className='md:mr-12'>
                <Link href='/donate' className='px-6 py-3 font-medium text-white rounded-lg bg-white text-brand-secondary-light md:py-4 md:px-6 rounded-lg'>Donate</Link>
              </div>
              <div>
                <Link href='/becomeamember' className='px-6 py-3 font-medium text-white rounded-lg bg-white text-brand-secondary-light md:py-4 md:px-6 rounded-lg'>Become a Member</Link>
              </div>
            </div>
            <div>
              <div className='absolute top-20 left-10'>
                <img src="https://files.selar.co/website-assets/landing/images/home_bg1.png" alt="Home Background Image" />
              </div>
              <div className="absolute top-20 right-60">
                <img src="https://files.selar.co/website-assets/landing/images/home_bg2.png" alt="Home Background Image"/>
              </div>
              <div className="absolute top-36 right-44">
                <img src="https://files.selar.co/website-assets/landing/images/home_bg2.png" alt="Home Background Image"/>
              </div>
              <div className="absolute left-40 inset-y-1/2">
                <img src="https://files.selar.co/website-assets/landing/images/home_bg2.png" alt="Home Background Image"/>
              </div>
              <div className="absolute right-0 inset-y-2/3">
                <img src="https://files.selar.co/website-assets/landing/images/home_bg3.png" alt="Home Background Image"/>
              </div>
              {/* <div className='absolute top-20 left-10 z-1' >
                <img src="/einstein.png" alt="Home Background Image" />
              </div> */}
            </div>
          </div>
          <div className="absolute inset-0 z-0">
            <img src="https://files.selar.co/website-assets/landing/images/home_bg4.png" alt="Home Background Image"/>
          </div>
          <div className='h-12 md:h-26'></div>
          <div className="h-40 overflow-hidden">
            <svg preserveAspectRatio="none" viewBox="0 0 1440 320" className="w-full h-full text-white" ><path fill="currentColor" fill-opacity="1" d="M0,32L40,74.7C80,117,160,203,240,240C320,277,400,267,480,218.7C560,171,640,85,720,42.7C800,0,880,0,960,32C1040,64,1120,128,1200,138.7C1280,149,1360,107,1400,85.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </div>
        </div>
        <div className='relative px-6 pb-20 mx-auto -mt-96 md:-mt-144 max-w-7xl md:px-0'>
          <div>
            <img src='/physics-picture-one.png' alt='dashboard'  className='hidden object-cover object-center w-full h-[750px] rounded-xl md:block' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage