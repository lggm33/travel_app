import Image from 'next/image'
import React from 'react'

function Guide() {

  const isProd = process.env.NODE_ENV === 'production'

  return (
    <section >
      <div className='flex flex-col justify-between lg:flex- p-10'>
        <div className='w-1/2'>
          <h4 className='uppercase regular-18 -mt-1 mb-3 text-green-50'>We are here for you</h4>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>Guide you to easy path</h2>
        </div>
        <div className='regular-16 text-gray-30 xl:max-w-[520px] flex items-center justify-center'>Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</div>
      </div>
      <div className='flexCenter flex-col max-container relative w-full my-10'>
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className='xl:rounded-5xl'
        />

        <div className='static mt-10 flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20 md:absolute md:mt-0 '>
          <Image
            src={`${isProd ? "/travel_app/" : ""}/meter.svg`}
            alt="meter"
            width={18}
            height={158}
            className='h-full w-auto'
          />
          <div className='flexBetween flex-col'>
          <div className='flex w-full flex-col mb-7'>
            <div className='flexBetween w-full'>
              <p className='regular-16 text-gray-20'>Destination</p>
              <p className='bold-16 text-green-50'>48 min</p>
            </div>
            <p className='bold-20'>Aguas Calientes</p>
          </div>
          <div className='flex w-full flex-col'>
            <div className='flexBetween w-full'>
              <p className='regular-16 text-gray-20'>Start track</p>
            </div>
            <p className='bold-20 mt-2'>Wonorejo Pasuruan</p>
          </div>

        </div>
        </div>
        
      </div>
    </section>
  )
}

export default Guide