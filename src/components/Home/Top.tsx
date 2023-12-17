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
          <div className={` flex flex-col min-h-[226px] w-[60%] gap-[30px] ml-[31px] z-30 mb-3`}>
            <text className=' text-[80px] leading-[84px]'>{blok.Title}</text>
            <text className=" overflow-hidden ">{blok.description}</text>
            <Pagelink url={blok.link[0].url.url} text={blok.link[0].Lable} variant="white" />
          </div>     
          <Link href="#solutuions" className=' self-center z-20 mb-5 ' ><Image src="/Icon/down.svg" alt='scroll' className=" self-end" width={50} height={50} /></Link>
    </div>
    )
}