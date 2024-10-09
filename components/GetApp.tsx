import React from 'react'
import Button from './ui/Button';
import Image from 'next/image';

function GetApp() {

  const isProd = process.env.NODE_ENV === 'production';


  return (
    <section id='get-app' className='flexCenter w-full flex-col pb-[100px] scroll-mt-28'>
      <div 
        className="get-app max-container relative flex w-full  flex-col justify-between gap-32 overflow-hidden  text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl" 
        style={{ backgroundImage: `url(${isProd ? "/travel_app/" : ""}${'/pattern.png'})` }}>
          <div className='z-20 flex w-full flex-1 flex-col items-start justify-center gap-12'>
            <h2 className='bold-40 lg:bold-64 xl:max-w-[320px]'>Get for free now!</h2>
            <p className='regular-16 text-gray-10'>Available on iOS and Android</p>
            <div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row'>
              <Button
                type='button'
                title='App Store'
                icon={`${isProd ? '/travel_app' : ''}/apple.svg`}
                variant='btn_white'
              />
              <Button
                type='button'
                title='Play Store'
                icon={`${isProd ? '/travel_app' : ''}/android.svg`}
                variant='btn_dark_green_outline'
              />
            </div>
          </div>
          <div className='flex-1 flex items-center justify-end'>
            <Image
              src={isProd ? "/travel_app" : "" + '/phones.png'}
              alt='phones'
              width={550}
              height={870}
            />
          </div>
      </div>
    </section>
  )
}

export default GetApp