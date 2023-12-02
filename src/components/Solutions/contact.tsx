"use client"
import Image from "next/image";
import { useState } from "react";

export default function Contact({contacts}:{contacts:any}) {
    const [count,setCount]=useState(0)
    return(
        <div className=" min-h-screen flex flex-col lx-[20px] lg:px-[64px] py-[40px] lg:py-[112px] text-black gap-[30px] lg:gap-[80px]">
            <div className=" flex flex-col gap-[24px]">
                <text>Contact</text>
                <text className=" heading1">Get your contact person</text>
                <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </text>
            </div>
            <div className=" flex justify-between items-center">
                <div className=" flex flex-col gap-[29px]">
                {
                    contacts.map((c:any,i:number)=>(
                        <button className={`grid grid-cols-1 text-start gap-[24px] pl-[32px] ${count==i?"border-l-2":null} border-brand`} onClick={()=>setCount(i)} >
                        <text className=" heading4">{c.country}</text>
                        <text className=" ">{c.name}</text>
                        <text className=" font-['DM_Mono'] font-[500] text-[18px]">{c.link}</text>
                        </button>
                    ))
                }
                </div>
                <div className=" relative w-[300px] h-[300px] lg:w-[541px] lg:h-[446px] bg-B-Yellow">
                    <Image src={`https://a.storyblok.com/f/263886/542x440/1a43abc04a/location.png`} alt={contacts[count].image.alt} fill />
                </div>
            </div>
        </div>
    )
}