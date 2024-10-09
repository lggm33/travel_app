import Image from 'next/image';
import {FEATURES} from '@/constants'


interface FeaturesItemsProps {
  title: string;
  icon: string;
  variant: string;
  description: string;
}

const FeaturesItems = (props:FeaturesItemsProps ) => {

  const isProd = process.env.NODE_ENV === 'production';


  const { title, icon, variant, description } = props;
  
  return (
    <li className='flex w-full flex-1 flex-col items-start'>
      <div className='rounded-full p-4 lg:p-7 bg-green-50 '>
        <Image src={`${isProd ? '/travel_app' : ''}${icon}`} alt='map' width={28} height={28} />
      </div>
      <h3 className='bold-20 lg:bold-32 mt-5 capitalize'>{title}</h3>
      <p className='regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none'>{description}</p>
    </li>
  )


}

function Features() {

  const isProd = process.env.NODE_ENV === 'production';

  return (
    <section id='features' className='flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24' style={{ backgroundImage: `url(${isProd ? "/travel_app/" : ""}/feature-bg.png)` }}>
      <div className='flex mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative w-full justify-end'>
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt='phone'
            width={440}
            height={1000}
            className='absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex  3xl:left-2'
          />
        </div>
        <div className='z-20 flex w-full flex-col lg:w-[60%]'>
          <h2 className='bold-40 lg:bold-64'>Our Features</h2>
          <ul  className='mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20'>
            {FEATURES.map(feature => (
              <FeaturesItems
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                variant={feature.variant}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
      
    </section>
  )
}

export default Features