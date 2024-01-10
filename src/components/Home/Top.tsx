"use client"
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import Pagelink from "../link";
import MediaRenderer from "../MediaComponent";
import Typewriter from 'typewriter-effect';
import { useEffect, useState } from "react";
import { useTypingEffect } from "@/hooks";
import { HandleMissingTags } from "@/utils";


export default function top({blok}:{blok:any}){
  //console.log(blok.Title.split('').map((i:string)=>{setTimeout(()=>{ return i;},500);return i;})) 
  const {Title}=blok;

  const titleAnimated=useTypingEffect({textToType:Title,duration:500,startTyping:true})
  const descriptionAnimated=useTypingEffect({textToType:blok.description,duration:100,startTyping:titleAnimated.isFinished});
  

  
  let {heading_tags}=blok;
    
    heading_tags=HandleMissingTags(heading_tags);
    const {Primary,Secondary}=heading_tags;
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
          <Primary>{titleAnimated.text}</Primary>
          <Secondary>{descriptionAnimated.text}</Secondary>
          {
            titleAnimated.isFinished&&descriptionAnimated.isFinished&&blok.link.map((link:any)=>(
              <Pagelink url={link.url.url} text={link.Lable} variant="white" />
            ))
          }
        </div>     
        <Link href="#solutuions" className=' self-center z-20 mb-5 ' ><Image src="/Icon/down.svg" alt='scroll' className=" scale-75 md:scale-100 self-end" width={50} height={50} /></Link>
    </div>
    )
}


/**
 * <heading_tags.primary_heading className=' heading1 '><Typewriter
          onInit={(typewriter)=>{
            typewriter.typeString(blok.Title).callFunction(()=>{setTitle(true)}).changeDelay(5).start()
          }}
          options={{cursor:""}}
          /></heading_tags.primary_heading>
          {
            title&&<heading_tags.secondary_heading className=" h-[150px] md:max-h-[310px] overflow-hidden "><Typewriter
            onInit={(typewriter)=>{
              typewriter.typeString(blok.description).callFunction(()=>{setDescription(true)}).changeDelay(10).start()
            }}
            options={{cursor:""}}
            /></heading_tags.secondary_heading>
          }
          {
            title&&description&&blok.link.map((link:any)=>(
              <Pagelink url={link.url.url} text={link.Lable} variant="white" />
            ))
          }
 */