"use client"
import Link from "next/link";
import { useState } from "react"
import { render } from "storyblok-rich-text-react-renderer";

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