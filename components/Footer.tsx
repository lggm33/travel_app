import Image from 'next/image'
import Link from 'next/link'
import {FOOTER_LINKS, FOOTER_CONTACT_INFO, SOCIALS} from '@/constants'

function Footer() {

  const isProd = process.env.NODE_ENV === 'production';

  return (
    <footer id='contact-us' className='flex items-center justify-center mb-24'>
      <div className='px-6 lg:px-20 3xl:px-0 mx-auto max-w-[1440px] flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link href='/' className='mb-10'>
            <Image
              src='./hilink-logo.svg'
              alt='logo'
              width={74}
              height={29}
            />
          </Link>
        <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>

        {FOOTER_LINKS.map((links) => (
            <div key={links.title} className='flex flex-col gap-4 text-grey-30'>
              <h4 className='bold-18 whitespace-nowrap'>{links.title}</h4>
              <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                {links.links.map((link) => (
                  <Link href='/' key={link}>
                    {link}
                  </Link>
                ))}
              </ul>
            </div>
          ))
        }
        <div className='flex flex-col gap-4 text-grey-30'>
          <h4 className='bold-18 whitespace-nowrap'>{FOOTER_CONTACT_INFO.title}</h4>
          <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link href='/' key={link.label}>
                  <p>{link.label} : {link.value}</p>
                  </Link>
                ))}
              </ul>
        </div>
        <div className='flex flex-col gap-4 text-grey-30'>
          <h4 className='bold-18 whitespace-nowrap'>{SOCIALS.title}</h4>
          <ul className='regular-14 flex gap-4 text-gray-30' >
            {SOCIALS.links.map((link) => (
              <Link href='/' key={link}>
                <Image
                  src={`${isProd ? "/travel_app" : ""}${link}`}
                  alt='logo'
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </ul>
          
        </div>
                    
        </div>
        </div>
        <div className='border bg-gray-20'></div>
        <p className='regular-14 w-full text-center text-gray-30'>2023 Hilink | All rights reserved</p>
      </div>
      
    </footer>
  )
}

export default Footer