import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

export default function STop({blok}:{blok:any}){
    return(
        <div className={` flex flex-col w-full h-screen bg-cover `} style={{backgroundImage:`url(${blok.image.filename})`}}  {...storyblokEditable(blok)} >
            <text className=" lg:max-w-[40%] relative heading1 self-end top-[60%] pr-[5%] ">{blok.heading}</text>
            <text className=" lg:max-w-[40%] relative  top-[70%] pl-[5%] " >{blok.description}</text>
            <Link href="#solutuions" className='relative top-[70%] self-center ' ><Image src="/Icon/down.svg" alt='scroll' width={50} height={50} /></Link>
        </div>
    )
}