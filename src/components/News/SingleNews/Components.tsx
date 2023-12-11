"use client"
import Link from "next/link";
import { useState } from "react"
import { render } from "storyblok-rich-text-react-renderer";
import { NewsCard } from "../NewsSection";

export function HeadingsDescription({blok}:{blok:any}){
    const content=blok;
    const [value,setValue]=useState(0)
    return (
        <>
            <div className=" grid grid-cols-3">
                <div className=" flex flex-col col-span-2  gap-[40px]">
                    {content.headings.map((h:any)=>(
                        <div className=" flex flex-col gap-[16px]"  key={h._uid}>
                            <text className={`text-[${h.textsize}px] font-[${h.fontweight}] `}  id={h.heading}>{h.heading}</text>
                            <text>{render(h.description)}</text>
                        </div>
                    ))}
                </div>
                <div className=" flex flex-col col-span-1 " >
                    <text className=" heading4">Contents</text>
                    {
                        content.headings.map((h:any,index:number)=>{
                            
                            console.log(value)
                            return (
                            <Link onClick={()=>setValue(index)} className={`ml-[${index*20}px] px-[16px] py-[12px] ${index==value?'bg-Light-Grey':null} hover:bg-Light-Grey `} href={"#"+h.heading} key={h._uid}>{h.heading}</Link>
                        )})
                    }
                </div>
                
            </div>
        </>
    )
}

export function DiscoverNews({blok}:{blok:any}){
    return(
        <div className=" min-h-screen flex flex-col bg-black text-white px-[20px] lg:px-[64px] py-[40px] lg:py-[112px]">
            <text className=" mb-[16px] Text-16 ">Latest</text>
            <text className=" heading2 mb-[24px] ">Discover our latest news</text>
            <text className=" mb-[80px]">Stay updated with our latest news articles.</text>
            <div className=" flex ">
                <NewsCard blok={2} variant="black" />
            </div>
        </div>
    )
}