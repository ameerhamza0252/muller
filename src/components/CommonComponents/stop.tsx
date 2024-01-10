import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import MediaRenderer from "../MediaComponent";

export default function STop({blok}:{blok:any}){
    const variant=blok.variant;
    return(
        <div className={` relative flex flex-col justify-end w-full h-screen bg-cover text-white ${!blok.media?'bg-black':''} `}  {...storyblokEditable(blok)} >
            <div className=" absolute w-[100%] h-[100%] shadow-inner "  onPlay={()=>console.log('Playing')} >
            {
                blok.media&&blok.media.map((m:any)=>(
                    <MediaRenderer url={m.media.filename} alt={m.media.alt} type={m.type} key={m._uid} />
                ))
            }
            </div>
            {/**Dark overlay */}
            <div className=" w-[100%] h-[100%] bg-black/30 absolute z-20 "></div>
            <div className=" flex flex-col z-30 py-5">
                {
                    variant=='right'||variant=='left'?(
                        <div className={`m-2 md:m-8 md:w-[40%] flex flex-col ${variant=='right'?'self-end':variant=='left'?'':''} `}>
                            <text className="m-2 md:m-8  heading1 ">{blok.heading}</text>
                            <text className="m-2 md:m-8 lg:max-w-[80%]  " >{blok.description}</text>
                        </div>
                    ):
                    variant=='left-right'?(
                        <>
                            <text className=" md:w-[40%] m-2 md:m-8 self-start  heading1 ">{blok.heading}</text>
                            <text className=" md:w-[30%] m-2 md:m-8 self-end  " >{blok.description}</text>
                        </>
                    ):(
                        <>
                            <text className=" md:w-[40%] m-2 md:m-8 self-end   heading1 ">{blok.heading}</text>
                            <text className=" md:w-[30%] m-2 md:m-8 self-start  " >{blok.description}</text>
                        </>
                    )
                }
            
            <Link href="#solutuions" className='scale-75 md:scale-100 self-center ' ><Image src="/Icon/down.svg" alt='scroll' width={50} height={50} /></Link>
            </div>
        </div>
    )
}