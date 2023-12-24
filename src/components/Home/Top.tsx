"use client"
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import Pagelink from "../link";
import MediaRenderer from "../MediaComponent";
import Typewriter from 'typewriter-effect';
import { useState } from "react";


export default function top({blok}:{blok:any}){
  //console.log(blok.Title.split('').map((i:string)=>{setTimeout(()=>{ return i;},500);return i;})) 
  const [title,setTitle]=useState(false)
  const [description,setDescription]=useState(false)
  
    return(
      <div className={` relative flex flex-col min-h-screen justify-end text-white  `} /*style={{backgroundImage:`url(${blok.image.filename})`}} */ >
        <div className=" absolute w-[100%] h-[100%] pointer-events-none "  onPlay={()=>console.log('Playing')} >
        {
            blok.media&&blok.media.map((m:any)=>(
                <MediaRenderer muted={true} url={m.media.filename} alt={m.media.alt} type={m.type} key={m._uid} />
            ))
        }
        {/**Dark overlay */}
        <div className="absolute w-[100%] h-[100%] inner-darker bg-black/30 z-20"></div>
        </div>
        <div className={` flex flex-col min-h-[50%] lg:w-[60%] gap-[30px] mx-[10px] md:mx-[31px] z-30 mb-3`} id="home-top">
          
          <text className=' heading1 '><Typewriter
          onInit={(typewriter)=>{
            typewriter.typeString(blok.Title).callFunction(()=>{setTitle(true)}).changeDelay(10).start()
          }}
          options={{cursor:""}}
          /></text>
          {
            title&&<text className=" h-[150px] md:max-h-[310px] overflow-hidden "><Typewriter
            onInit={(typewriter)=>{
              typewriter.typeString(blok.description).callFunction(()=>{setDescription(true)}).changeDelay(10).start()
            }}
            options={{cursor:""}}
            /></text>
          }
          {
            title&&description&&blok.link.map((link:any)=>(
              <Pagelink url={link.url.url} text={link.Lable} variant="white" />
            ))
          }
        </div>     
        <Link href="#solutuions" className=' self-center z-20 mb-5 ' ><Image src="/Icon/down.svg" alt='scroll' className=" scale-75 md:scale-100 self-end" width={50} height={50} /></Link>
    </div>
    )
}