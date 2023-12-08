import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import Pagelink from "../link";

export default function top({blok}:{blok:any}){
  //console.log(blok) 
    return(
      <div className={` flex flex-col w-full min-h-screen bg-cover justify-end text-white `} style={{backgroundImage:`url(${blok.image.filename})`}} >
          <div className=' flex flex-col min-h-[226px] w-[750px] top-[327px] ml-[31px]'>
            <text className=' text-[80px] leading-[84px]'>{blok.Title}</text>
            <text className=" mt-[36px] overflow-hidden ">{blok.description}</text>
            <Pagelink variant="white" />
          </div>     
          <Link href="#solutuions" className=' self-center justify-self-end ' ><Image src="/Icon/down.svg" alt='scroll' className=" self-end" width={50} height={50} /></Link>
    </div>
    )
}