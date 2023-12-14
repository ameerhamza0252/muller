import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import Pagelink from "../link";
import MediaRenderer from "../MediaComponent";

export default function top({blok}:{blok:any}){
  console.log(blok) 
    return(
      <div className={` relative flex flex-col min-h-screen bg-cover justify-end text-white z-10 `} /*style={{backgroundImage:`url(${blok.image.filename})`}} */ >
        <div className=" absolute w-[100%] h-[100%] " onPlay={()=>console.log('Playing')} >
        {
            blok.media.map((m:any)=>(
                <MediaRenderer url={m.media.filename} alt={m.media.alt} type={m.type} key={m._uid} />
            ))
        }
        </div>
          <div className=' flex flex-col min-h-[226px] w-[750px] top-[327px] ml-[31px] z-30'>
            <text className=' text-[80px] leading-[84px]'>{blok.Title}</text>
            <text className=" mt-[36px] overflow-hidden ">{blok.description}</text>
            <Pagelink url="http://localhost:3000" variant="white" />
          </div>     
          <Link href="#solutuions" className=' self-center justify-self-end ' ><Image src="/Icon/down.svg" alt='scroll' className=" self-end" width={50} height={50} /></Link>
    </div>
    )
}