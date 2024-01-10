"use client"
import Image from "next/image";
import { useState } from "react";
import Pagelink from "../link";
import { storyblokEditable } from "@storyblok/react";
import { handleMissingColors } from "@/utils";

export default function Benefits({blok}:{blok:any}){
    const benefits=blok.benefits
    //console.log(benefits)
    const [count,setCount]=useState(0)
    let {colors}=blok;
    colors=handleMissingColors(colors)
    let {link}=blok;
    if(!link){
        link=[{}]
    }
    return (
        <div className=" flex flex-col bg-black min-h-screen py-[50px]  lg:py-[112px] px-[10px] md:px-[64px] gap-[20px] md:gap-[40px] lg:gap-[72px]" style={{backgroundColor:colors[0].background_color,color:colors[0].text_color}} id={blok.anchor_id} {...storyblokEditable(blok)}>
            <text className=" ">{blok.title}</text>
            <div className=" grid grid-cols-1 lg:grid-cols-2 lg:flex-row justify-between items-center lg:min-h-[500px] mb-[10px] ">
               <div className=" relative min-w-[300px] min-h-[400px] lg:w-[90%] lg:h-[90%] xl:w-[90%] xl:h-[900px] xl:bg-B-Yellow">
               <Image src={benefits[count].media.filename} fill objectFit="contain" alt={benefits[0].media.alt} style={{backgroundAttachment:"fixed"}} />
               </div>
                <div className=" flex flex-col items-start py-[20px] gap-[40px]">
                  {
                     benefits.map((benefit:any,i:number)=>(
                        <button onClick={()=>setCount(i)} className={`flex flex-col min-h-[150px] items-center gap-[20px] pl-[32px] border-l-2 `} style={{borderLeftColor:i==count?colors[0].border_color:null}} key={benefit._uid} >
                           <text className=" heading4">{benefit.title}</text>
                           <text>{benefit.description}</text>
                        </button>
                     ))
                  }
                </div>
            </div>
            <div className="flex justify-end"><Pagelink text={link[0].Lable} url={link[0].url?link[0].url.url:""} variant={colors[0].link_variant} /></div>
        </div>
    )
}