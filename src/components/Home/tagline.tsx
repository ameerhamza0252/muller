"use client"
import Image from "next/image";
import { useState } from "react";

export default function Tagline({tagline,locations}:{tagline:any,locations:any}){
    const [value,setValue]=useState(0);
    return(
        <div className=" min-h-screen flex flex-col md:px-[64px] py-[112px] gap-[80px] text-black">
            <div className=" grid grid-cols-1">
                <text>Tagline</text>
                <text className=" mt-[16px] mb-[24px] heading2">{tagline[0].title}</text>
                <text>{tagline[0].tagline}</text>
            </div>
            <div className=" flex justify-between items-center">
                {locations.map((l:any,i:number)=>(
                    <button onClick={()=>{setValue(i)}} key={l._uid} className=" h-auto flex flex-col gap-[29px] ">
                    <div className={`grid grid-cols-1  pl-[27px] ${value==i?"border-l-[1px]":null} border-brand`}>
                    <text className=" text-[30px] leading-[33px]">{l.country}</text>
                    <text className=" leading-[33.6px] mt-[16px] mb-[24px]">{l.location}</text>
                    <text className=" font-['DM_Mono'] font-[500] text-[18px]">{l.link}</text>
                    </div>
                </button>
                ))}
                <Image src={locations[value].image.filename} width={542} height={440} alt="location" />
            </div>
        </div>
    )
}