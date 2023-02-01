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
        <div className="relative mx-auto max-w-7xl">
          <svg viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-20 h-20 right-6 md:right-6"><path d="M40.388 86.143h32.76c6.628 0 12-5.373 12-12v-32.76c0-6.628-5.372-12-12-12h-32.76c-6.627 0-12 5.372-12 12v32.76c0 6.627 5.373 12 12 12z" fill="#D3D3F8"></path> <path d="M68.771 57.76h32.76c6.628 0 12-5.373 12-12V13c0-6.627-5.372-12-12-12h-32.76c-6.627 0-12 5.373-12 12v32.76c0 6.627 5.373 12 12 12z" stroke="#32374E" stroke-width="2" stroke-miterlimit="10"></path></svg>
        </div>
        <div className='relative'>
          <div className='px-6 mx-auto md:px-4 my-28 max-w-7xl text-brand-primary'>
            <div className='max-w-lg mx-auto mb-20 text-4xl font-bold text-center'>
              Check out more about us and resources that we have
            </div>
            <div className='grid grid-cols-1 gap-16 md:grid-cols-3'>
              <div className='flex items-center space-x-4 cursor-pointer md:space-x-0 md:block'>
                <div>
                  <svg data-v-32a7658e="" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-32a7658e="" d="M5.9668 5.05458C5.9668 4.41822 6.48267 3.90234 7.11903 3.90234H37.7493C38.3857 3.90234 38.9015 4.41822 38.9015 5.05458V25.0579C38.9015 25.6943 38.3857 26.2102 37.7493 26.2102H7.11903C6.48267 26.2102 5.9668 25.6943 5.9668 25.0579V5.05458Z" fill="#B0BDF2"></path> <g data-v-32a7658e="" clip-path="url(#clip0)"><path data-v-32a7658e="" d="M1.09766 8.21484H34.0324V30.5227H1.09766V8.21484Z" stroke="#32374E" stroke-width="2.23771" stroke-linecap="round" stroke-linejoin="round"></path> <path data-v-32a7658e="" d="M15.3652 36.1038V30.5269" stroke="#32374E" stroke-width="2.23771" stroke-linecap="round" stroke-linejoin="round"></path> <path data-v-32a7658e="" d="M19.7598 36.1038V30.5269" stroke="#32374E" stroke-width="2.23771" stroke-linecap="round" stroke-linejoin="round"></path> <path data-v-32a7658e="" d="M12.0781 36.1016H23.0564" stroke="#32374E" stroke-width="2.23771" stroke-linecap="round" stroke-linejoin="round"></path></g> <defs data-v-32a7658e=""><clipPath data-v-32a7658e="" id="clip0"><rect data-v-32a7658e="" width="35.1304" height="35.6925" fill="white" transform="translate(0 4.30859)"></rect></clipPath></defs></svg>
                </div>
                <div>
                  <div className="mt-3 mb-2 font-bold">Who we are</div>
                </div>
                <div>
                  We are entire student of the Department of Physics, Federal University of Technology Akure
                </div>
                <div>
                  <Link href='/about-us' className='text-brand-secondary-light'>Read More...</Link>
                </div>
              </div>
              <div className='flex items-center space-x-4 cursor-pointer md:space-x-0 md:block'>
                <div>
                  <svg data-v-32a7658e="" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-32a7658e="" d="M7.27344 4C7.27344 1.79086 9.0643 0 11.2734 0H36.0007C38.2098 0 40.0007 1.79086 40.0007 4V28.7273C40.0007 30.9364 38.2098 32.7273 36.0007 32.7273H11.2734C9.0643 32.7273 7.27344 30.9364 7.27344 28.7273V4Z" fill="#DEC2F5"></path> <g data-v-32a7658e="" clip-path="url(#clip0)"><path data-v-32a7658e="" d="M11.2507 33.8659C11.2507 35.2221 10.712 36.5228 9.75296 37.4817C8.79397 38.4407 7.49329 38.9795 6.13707 38.9795C4.78085 38.9795 3.48018 38.4407 2.52119 37.4817C1.56219 36.5228 1.02344 35.2221 1.02344 33.8659V16.4795" stroke="#32374E" stroke-width="2.18" stroke-linecap="round" stroke-linejoin="round"></path> <path data-v-32a7658e="" d="M21.4773 33.8623C21.4773 35.2185 20.9385 36.5192 19.9795 37.4782C19.0205 38.4372 17.7199 38.9759 16.3636 38.9759C15.0074 38.9759 13.7067 38.4372 12.7477 37.4782C11.7888 36.5192 11.25 35.2185 11.25 33.8623" stroke="#32374E" stroke-width="2.18" stroke-linecap="round" stroke-linejoin="round"></path> <path data-v-32a7658e="" d="M31.7058 16.4795V33.8659C31.7058 35.2221 31.167 36.5228 30.208 37.4817C29.249 38.4407 27.9484 38.9795 26.5922 38.9795C25.2359 38.9795 23.9353 38.4407 22.9763 37.4817C22.0173 36.5228 21.4785 35.2221 21.4785 33.8659" stroke="#32374E" stroke-width="2.18" stroke-linecap="round" stroke-linejoin="round"></path> <path data-v-32a7658e="" d="M11.2507 16.4777C11.2507 17.8339 10.712 19.1346 9.75296 20.0936C8.79397 21.0526 7.49329 21.5914 6.13707 21.5914C4.78085 21.5914 3.48018 21.0526 2.52119 20.0936C1.56219 19.1346 1.02344 17.8339 1.02344 16.4777V8.2959" stroke="#32374E" stroke-width="2.18" stroke-linecap="round" stroke-linejoin="round"></path> <path data-v-32a7658e="" d="M21.4773 16.4795C21.4773 17.8357 20.9385 19.1364 19.9795 20.0954C19.0205 21.0544 17.7199 21.5931 16.3636 21.5931C15.0074 21.5931 13.7067 21.0544 12.7477 20.0954C11.7888 19.1364 11.25 17.8357 11.25 16.4795" stroke="#32374E" stroke-width="2.18" stroke-linecap="round" stroke-linejoin="round"></path> <path data-v-32a7658e="" d="M31.7058 8.2959V16.4777C31.7058 17.8339 31.167 19.1346 30.208 20.0936C29.249 21.0526 27.9484 21.5914 26.5922 21.5914C25.2359 21.5914 23.9353 21.0526 22.9763 20.0936C22.0173 19.1346 21.4785 17.8339 21.4785 16.4777" stroke="#32374E" stroke-width="2.18" stroke-linecap="round" stroke-linejoin="round"></path> <path data-v-32a7658e="" d="M6.13672 8.2959V17.5004" stroke="#32374E" stroke-width="2.18" stroke-linecap="round" stroke-linejoin="round"></path> <path data-v-32a7658e="" d="M16.3652 8.2959V17.5004" stroke="#32374E" stroke-width="2.18" stroke-linecap="round" stroke-linejoin="round"></path> <path data-v-32a7658e="" d="M26.5918 8.2959V17.5004" stroke="#32374E" stroke-width="2.18" stroke-linecap="round" stroke-linejoin="round"></path> <path data-v-32a7658e="" d="M11.25 33.8641V8.2959" stroke="#32374E" stroke-width="2.18" stroke-linecap="round" stroke-linejoin="round"></path> <path data-v-32a7658e="" d="M21.4785 33.8641V8.2959" stroke="#32374E" stroke-width="2.18" stroke-linecap="round" stroke-linejoin="round"></path></g> <defs data-v-32a7658e=""><clipPath data-v-32a7658e="" id="clip0"><rect data-v-32a7658e="" width="32.7273" height="32.7273" fill="white" transform="translate(0 7.27295)"></rect></clipPath></defs></svg>
                </div>
                <div>
                  <div className="mt-3 mb-2 font-bold">Ebooks</div>
                </div>
                <div>
                  We are entire student of the Department of Physics, Federal University of Technology Akure
                </div>
                <div>
                  <Link href='/about-us' className='text-brand-secondary-light'>Read More...</Link>
                </div>
              </div>
              <div className='flex items-center space-x-4 cursor-pointer md:space-x-0 md:block'>
                <div>
                <svg data-v-32a7658e="" width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-32a7658e="" d="M24.2868 32.4285C27.8763 29.4163 32.2715 27.5027 36.938 26.9205C37.4879 26.8487 37.9927 26.5812 38.3583 26.1677C38.7239 25.7543 38.9253 25.2232 38.9251
                      24.6734V8.78813C38.926 8.46123 38.8561 8.13794 38.72 7.84017C38.5839 7.5424 38.3848 7.27711 38.1362 7.06227C37.8876 6.84743 37.5953 6.68805 37.2791
                      6.59495C36.963 6.50185 36.6303 6.47719 36.3037 6.52265C31.8708 7.20118 27.7126 9.07867 24.2868 11.9485C23.8769 12.2638 23.3728 12.4349 22.854
                      12.4349C22.3351 12.4349 21.831 12.2638 21.4211 11.9485C17.996 9.0809 13.8395 7.20495 9.40849 6.5269C9.08223 6.48149 8.74994 6.50605 8.43409 6.5989C8.11823
                      6.69176 7.82617 6.85075 7.57765 7.06512C7.32913 7.2795 7.12994 7.54427 6.99356 7.84152C6.85718 8.13877 6.78677 8.46159 6.78711 8.78813V24.6734C6.78686
                      25.2232 6.98832 25.7543 7.35391 26.1677C7.71951 26.5812 8.22431 26.8487 8.77422 26.9205C13.4422 27.5019 17.839 29.4155 21.4297 32.4285C21.8386 32.7424 22.3411
                      32.9127 22.8582 32.9127C23.3754 32.9127 23.8779 32.7424 24.2868 32.4285Z" fill="#B6E9ED"></path> <g data-v-32a7658e="" clip-path="url(#clip0)"><path data-v-32a7658e="" d="M18.5719 38.448C22.1615 35.4358 26.5567 33.5222 31.2231 32.9401C31.773 32.8682 32.2778 32.6007 32.6434 32.1873C33.009 31.7738 33.2105 31.2427 33.2102
                      30.693V14.8077C33.2112 14.4808 33.1412 14.1575 33.0051 13.8597C32.869 13.5619 32.6699 13.2966 32.4213 13.0818C32.1727 12.867 31.8805 12.7076 31.5643 12.6145C31.2481
                      12.5214 30.9155 12.4967 30.5889 12.5422C26.1559 13.2207 21.9978 15.0982 18.5719 17.968C18.162 18.2833 17.658 18.4544 17.1391 18.4544C16.6203 18.4544 16.1162 18.2833
                      15.7063 17.968C12.2812 15.1004 8.12463 13.2245 3.69365 12.5464C3.36739 12.501 3.0351 12.5256 2.71924 12.6184C2.40339 12.7113 2.11133 12.8703 1.86281 13.0847C1.61429
                      13.299 1.4151 13.5638 1.27872 13.8611C1.14233 14.1583 1.07193 14.4811 1.07227 14.8077V30.693C1.07202 31.2427 1.27347 31.7738 1.63907 32.1873C2.00467 32.6007 2.50947
                      32.8682 3.05937 32.9401C7.72731 33.5214 12.1241 35.435 15.7149 38.448C16.1237 38.7619 16.6262 38.9323 17.1434 38.9323C17.6606 38.9323 18.1631 38.7619 18.5719 38.448V38.448Z" stroke="#32374E" stroke-width="2.1838" stroke-linecap="round" stroke-linejoin="round"></path> <path data-v-32a7658e="" d="M28.5996 7.07812C24.9164 7.99217 21.4886 9.71754 18.5712 12.1259C18.1613 12.4412 17.6572 12.6123 17.1383 12.6123C16.6195 12.6123 16.1154 12.4412 15.7055 12.1259C12.7923 9.71948 9.36954 7.99464 5.69141 7.07954" stroke="#32374E" stroke-width="2.1838" stroke-linecap="round" stroke-linejoin="round"></path> <path data-v-32a7658e="" d="M17.1406 18.4521V38.9307" stroke="#32374E" stroke-width="2.1838" stroke-linecap="round" stroke-linejoin="round"></path></g> <defs data-v-32a7658e=""><clipPath data-v-32a7658e="" id="clip0"><rect data-v-32a7658e="" width="34.2851" height="33.9823" fill="white" transform="translate(0 6.01953)"></rect></clipPath></defs></svg>
                </div>
                <div>
                  <div className="mt-3 mb-2 font-bold">Course & Membership</div>
                </div>
                <div>
                  We are entire student of the Department of Physics, Federal University of Technology Akure
                </div>
                <div>
                  <Link href='/about-us' className='text-brand-secondary-light'>Read More...</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage