
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

export default function top({blok}:{blok:any}){
  //console.log(blok) 
    return(
        <div className={` flex flex-col w-full h-screen bg-cover `} style={{backgroundImage:`url(${blok.image.filename})`}} >
      <div className=' relative flex flex-col h-[226px] w-[750px] top-[327px] left-[31px]'>
        <text className=' text-[80px] leading-[84px]'>
        {blok.Title}
        </text>
        <text className=" mt-[36px]">
        {blok.description}
        </text>
        <div className='flex justify-between items-baseline h-[38px] w-[353px] text-[21px] font-medium border-b-[1px] border-white pb-1'>
          <text>
            Get info
          </text>
          <BiRightArrowAlt/>
        </div>
      </div>     
      <Link href="#solutuions" className='relative top-[705px] self-center ' ><Image src="/Icon/down.svg" alt='scroll' width={50} height={50} /></Link>
    </div>
    )
}