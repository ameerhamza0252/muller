import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import Pagelink from "../link";
import MediaRenderer from "../MediaComponent";

export default function top({blok}:{blok:any}){
  //console.log(blok) 
    return(
      <div className={` relative flex flex-col min-h-screen justify-end text-white  `} /*style={{backgroundImage:`url(${blok.image.filename})`}} */ >
        <div className=" absolute w-[100%] h-[100%] pointer-events-none "  onPlay={()=>console.log('Playing')} >
        {
            blok.media&&blok.media.map((m:any)=>(
                <MediaRenderer muted={true} url={m.media.filename} alt={m.media.alt} type={m.type} key={m._uid} />
            ))
        }
        <div className="absolute w-[100%] h-[100%] inner-darker"></div>
        </div>
          <div className={` flex flex-col min-h-[226px] lg:w-[60%] gap-[30px] mx-[10px] md:mx-[31px] z-30 mb-3`}>
            <text className=' heading1'>{blok.Title}</text>
            <text className=" h-[150px] md:max-h-[310px] overflow-hidden ">{blok.description}</text>
            {
              blok.link.map((link:any)=>(
                <Pagelink url={link.url.url} text={link.Lable} variant="white" />
              ))
            }
          </div>     
          <Link href="#solutuions" className=' self-center z-20 mb-5 ' ><Image src="/Icon/down.svg" alt='scroll' className=" scale-75 md:scale-100 self-end" width={50} height={50} /></Link>
    </div>
    )
}