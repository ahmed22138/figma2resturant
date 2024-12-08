import Image from "next/image"
import Link from "next/link"

export default function Content(){
    return(


        <div className="bg-black sm:h-screen ">
                <div className="">
         <Image src={'/images/3434.png'} alt=".." width={24} height={100} className="sm:absolute sm:left-9  sm:top-44 "/>
                <Image src={'/images/Its Quick & Amusing!.png'} alt=".." width={248} height={40} className="sm:absolute sm:top-56 sm:left-28"/>

                <Image src={'/images/3333.png'} alt=".." width={500} height={80} className=" top-72 left-24 absolute"/>
                 
                <Image src={'/images/11111.png'} alt=".." width={400} height={100} className="absolute top-[460px] left-28"/>

                <Image src={'/images/Image.png'} alt="./" width={600} height={500} className="ml-[870px]  pt-20" />
                </div>
                <button className="bg-amber-500 h-12 w-40 ml-28 absolute top-[530px] rounded-full text-white ">See menu</button>
            </div>
    )
}