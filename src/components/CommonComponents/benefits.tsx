"use client"
import Image from "next/image";
import { useState } from "react";
import Pagelink from "../link";

export default function Benefits({blok}:{blok:any}){
    const benefits=blok.benefits
    console.log(benefits)
    const [count,setCount]=useState(0)
    return (
        <div className=" flex flex-col bg-black min-h-screen py-[112px] px-[64px] gap-[20px] md:gap-[40px] lg:gap-[72px]">
            <text className=" text-white">Benefits</text>
            <div className=" grid grid-cols-1 lg:grid-cols-2 lg:flex-row justify-between items-center lg:min-h-[500px] mb-[10px] ">
               <div className="  relative w-[300px] h-[400px] lg:w-[496px] lg:h-[640px] xl:w-[90%] xl:h-[900px]">
               <Image src={benefits[count].media.filename} fill alt={benefits[0].media.alt} />
               </div>
                <div className=" flex flex-col items-start py-[20px] gap-[40px]">
                  {
                     benefits.map((benefit:any,i:number)=>(
                        <button onClick={()=>setCount(i)} className={`flex flex-col min-h-[150px] items-center gap-[20px] pl-[32px] border-l-2 ${i==count?'border-B-Yellow':null}`} key={benefit._uid} >
                           <text className=" heading4">{benefit.title}</text>
                           <text>{benefit.description}</text>
                        </button>
                     ))
                  }
                </div>
            </div>
            <div className="flex justify-end"><Pagelink variant="black" /></div>
        </div>
    )
}