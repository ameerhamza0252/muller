"use client"
import Image from "next/image";
import { useState } from "react";

export default function Benefits({benefits}:{benefits:any}){
    //console.log(benefits)
    const [count,setCount]=useState(0)
    return (
        <div className=" bg-black min-h-screen py-[112px] px-[64px]">
            <text>Benefits</text>
            <div className=" grid grid-cols-1 lg:grid-cols-2 lg:min-h-[500px] lg:flex-row justify-between">
               <div className="  relative w-[300px] h-[400px] lg:w-[541px] lg:h-[640px]">
               <Image src={benefits[count].media.filename} fill alt={benefits[0].media.alt} />
               </div>
                <div className=" flex flex-col items-start py-[20px]">
                  {
                     benefits.map((benefit:any,i:number)=>(
                        <button className={`flex flex-col min-h-[150px] items-center gap-[20px] py-3 pl-[32px] border-l-2 ${i==count?'border-B-Yellow':null}`} key={benefit._uid} >
                           <text className=" heading4">{benefit.title}</text>
                           <text>{benefit.description}</text>
                        </button>
                     ))
                  }
                </div>
            </div>
        </div>
    )
}