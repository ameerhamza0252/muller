"use client"
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Premade_Slider, { SolutionsThatWorkTogether } from "../Solutions/ClientComponents";

export default function Contact({blok}:{blok:any}) {
    //console.log('CONTACTS OPEN')
    const contacts=blok.contacts;
    //console.log(contacts[0])
    const [count,setCount]=useState(0)
    return(
        <>
            <div className=" min-h-screen flex flex-col px-[20px] lg:px-[64px] py-[40px] lg:py-[112px] text-black gap-[30px] lg:gap-[80px]" {...storyblokEditable(blok)}>
            <div className=" flex flex-col gap-[24px]">
                <text>{blok.title}</text>
                <text className=" heading1">{blok.heading}</text>
                <text>{blok.overview}</text>
            </div>
            <div className=" flex flex-col md:flex-row justify-between items-center gap-[20px] md:gap-0">
                <div className=" flex flex-col w-full gap-[29px]">
                {
                    contacts.map((c:any,i:number)=>(
                        <button className={`grid grid-cols-1 text-start gap-[24px] pl-[32px] ${count==i?"border-l-2":null} border-brand`} onClick={()=>setCount(i)} key={c._uid} >
                        <text className=" heading4">{c.country}</text>
                        <text className=" ">{c.name}</text>
                        <Link href={c.link.url} className=" font-['DM_Mono'] font-[500] text-[18px]">{c.link_text}</Link>
                        </button>
                    ))
                }
                </div>
                <div className=" relative w-full h-[300px] lg:w-[541px] lg:h-[446px]">
                    <Image src={contacts[count].image.filename} alt={contacts[count].image.alt} fill />
                </div>
            </div>
        </div>
        </>
    )
}