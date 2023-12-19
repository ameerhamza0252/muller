"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Tagline({blok}:{blok:any}){
    //console.log(blok)
    const [value,setValue]=useState(0);
    const locations=blok.locations[0].locationlist
    //console.log(locations[0])
    return(
        <div className=" min-h-screen flex flex-col md:px-[64px] py-[112px] gap-[80px] text-black">
            <div className=" grid grid-cols-1 px-[10px] md:px-0">
                <text>{blok.title}</text>
                <text className=" mt-[16px] mb-[24px] heading2">{blok.title}</text>
                <text>{blok.tagline}</text>
            </div>
            <div className=" flex flex-col lg:flex-row gap-10 lg:gap-0  md:justify-between ">
                <div className="h-auto max-w-[400px] flex flex-col gap-[29px] px-[20px] ">
                    {locations&&locations.map((l:any,i:number)=>(
                        <button onMouseOver={()=>setValue(i)} key={l._uid} className={` flex flex-col pl-[10px] md:pl-[27px] text-start ${value==i?"border-l-[1px]":null} border-brand`}>
                        
                        <text className=" heading3">{l.country}</text>
                        <text className=" lg:leading-[33.6px] mt-[16px] mb-[24px]">{l.location}</text>
                        <Link href={l.link}><text className=" font-['DM_Mono'] font-[500] text-[18px]">{l.linktext}</text></Link>
                        </button>
                    ))}
                </div>
                <Image src={locations[value].image.filename} width={542} height={440} alt="location" />
            </div>
        </div>
    )
}