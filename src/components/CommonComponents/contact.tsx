"use client"
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { handleMissingColors } from "@/utils";

export default function Contact({blok}:{blok:any}) {
    const {contacts}=blok;
    const [count,setCount]=useState(0)
    let {colors}=blok;
    colors=handleMissingColors(colors)
    return(
        <>
            <div className=" min-h-screen flex flex-col px-[20px] lg:px-[64px] py-[40px] lg:py-[112px] gap-[30px] lg:gap-[80px]" style={{backgroundColor:colors[0].background_color,color:colors[0].text_color}} id={blok.anchor_id} {...storyblokEditable(blok)}>
            <div className=" flex flex-col gap-[24px]">
                <p>{blok.title}</p>
                <h2 className=" heading1">{blok.heading}</h2>
                <text>{blok.overview}</text>
            </div>
            <div className=" flex flex-col md:flex-row justify-between items-center gap-[20px] md:gap-0">
                <div className=" flex flex-col w-full gap-[29px]">
                {
                    contacts.map((c:any,i:number)=>(
                        <button className={`grid grid-cols-1 text-start gap-[24px] pl-[32px]`} style={{borderLeft:count==i?`1px solid ${colors[0].border_color}`:''}} onClick={()=>setCount(i)} key={c._uid} >
                        <h4 className=" heading4">{c.country}</h4>
                        <text className=" ">{c.name}</text>
                        <Link href={c.link.linktype=="email"?"mailto:"+c.link.url:c.link.url} className=" font-['DM_Mono'] font-[500] text-[18px]">{c.link_text}</Link>
                        </button>
                    ))
                }
                </div>
                <div className=" relative w-full h-[300px] lg:w-[541px] lg:h-[446px]">
                    <Image src={contacts[count].image.filename} alt={contacts[count].image.alt} objectFit="contain" fill />
                </div>
            </div>
        </div>
        </>
    )
}