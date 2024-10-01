import Image from "next/image"
import Button from "./ui/Button"
import LocationCard from "./ui/LocationCard"

function Hero() {
  return (

    <section className='max-container padding-container flex flex-col py-10 pb-32'>
        <div className='hero-map'/>

        {/* left side */}

        <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
            
            <h1 className="bold-52 lg:bold-68">Putuk Truno Camp Area</h1>
            <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>
        </div>

        <div className="my-11 flex flex-wrap gap-5">
            <div className="flex items-center gap-2">
                {Array(5).fill(1).map((_, i) => (
                    <Image
                        src='./star.svg'
                        key={i}
                        alt='star'
                        width={24}
                        height={24}
                    />
                ))}
            </div>
            <p className="bold-16 lg:bold-20 text-blue-70">
                198k
                <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
            </p>
        </div>

        <div className="flex w-full gap-3 sm:flex-row flex-col z-40">
            <Button
                type='button'
                title='Download App'
                variant='btn_green'
            />
            <Button
                type="button"
                title="How we work?"
                icon="./play.svg"
                variant="btn_white_text"
            />
        </div>
        <LocationCard/>
    </section>
  )
}

export default Hero