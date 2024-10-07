import { PEOPLE_URL } from "@/constants";
import Image from "next/image";


interface CampProps {
    backgrounImage: string;
     title: string;
     subtitle: string;
     peopleJoined: string;
}

const CampSite = (props: CampProps) => {

    const isProd = process.env.NODE_ENV === 'production';


    const { backgrounImage, title, subtitle, peopleJoined} = props;

    return (
        <div className={`h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-5xl 2xl:rounded-5xl`} style={{ backgroundImage: `url(${isProd ? "/travel_app/" : ""}${backgrounImage})` }}>
            <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
                <div className="flexCenter gap-4">
                    <div className="rounded-full bg-green-50 p-4">
                        <Image
                            src="./folded-map.svg"
                            alt="map"
                            width={28}
                            height={28}
                        />
                    </div>
                    <div >
                        <h4 className="bold-20 text-white">{title}</h4>
                        <p className="regular-16  text-gray-20">{subtitle}</p>
                    </div>
                </div>
                <div className="flexCenter gap-6">
                <span className="flex -space-x-4 overflow-hidden">
                    {PEOPLE_URL.map((url) => (
                        <Image
                            className="inline-block h-10 w-10 rounded-full"
                            src={`${isProd ? '/travel_app' : ''}${url}`}
                            key={url}
                            alt="person"
                            width={52}
                            height={52}
                        />
                    ))}
                </span>
                <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>

            </div>
            </div>
            
        </div>
    )
}

function Camp() {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
        <div className='flex h-[340px] w-full pb-5 items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
            
            <CampSite
                backgrounImage="img-1.png"
                title="Putuk Truno Camp"
                subtitle="Prigen, Pasuruan"
                peopleJoined="50+ Joined"
            />
            <CampSite
                backgrounImage="img-2.png"
                title="Mounte Skai Camp"
                subtitle="Somewhere in the Wilderness"
                peopleJoined="50+ Joined"
            />
        </div>
        <div className="max-w-[500px] w-full mx-auto mt-10 bg-green-50 rounded-5xl p-10">
            <h4 className="regular-24 text-white"><strong>Feeling Lost</strong> And Not Knowing The Way?</h4>
            <p className=" regular-14 mt-5 text-white">Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure</p>
        </div>
    </section>
  )
}

export default Camp