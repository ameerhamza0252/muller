"use client"
import Link from "next/link";
import { useState } from "react"
import {render} from 'storyblok-rich-text-react-renderer-ts';

import { getStoryblokApi, renderRichText, storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Pagelink from "@/components/link";

export function HeadingsDescription({blok}:{blok:any}){
    const content=blok;
    const [value,setValue]=useState(0)

    return (
        <>
            <div className=" grid grid-cols-3 pb-[20px] md:pb-[40px]" {...storyblokEditable(blok)} id={blok.anchor_id}>
                <div className=" flex flex-col col-span-2  gap-[40px]">
                    {content.headings.map((h:any)=>(
                        <div className=" flex flex-col gap-[16px]"  key={h._uid}>
                            <text className={`text-[${h.textsize}px] font-[${h.fontweight}] `}  id={h.heading}>{h.heading}</text>
                            <text className=" max-w-none prose text-[21px] ">{render(h.description)}</text>
                        </div>
                    ))}
                </div>
                <div className=" flex flex-col col-span-1 " >
                    <text className=" heading4">Contents</text>
                    {
                        content.headings.map((h:any,index:number)=>{
                            //console.log(value)
                            return (
                            <Link onClick={()=>setValue(index)} className={`ml-[${index*20}px] px-[16px] py-[12px] ${index==value?'bg-Light-Grey':null} hover:bg-Light-Grey `} href={"#"+h.heading} key={h._uid}>{h.heading}</Link>
                        )})
                    }
                </div>
                
            </div>
        </>
    )
}

export async function DiscoverNews({blok}:{blok:any}){
    const newsPromises = blok.News.map(async (uuid: string) => ((await fetchData(uuid)).data));
    const newslist = await Promise.all(newsPromises);
    //console.log(newslist)
    return(
        <div className=" min-h-screen flex flex-col bg-black text-white px-[20px] lg:px-[64px] py-[40px] lg:py-[112px]" id={blok.anchor_id} {...storyblokEditable(blok)} >
            <text className=" mb-[16px] Text-16 ">Latest</text>
            <text className=" heading2 mb-[24px] ">Discover our latest news</text>
            <text className=" mb-[80px]">Stay updated with our latest news articles.</text>
            <div className=" flex flex-wrap gap-5">
                {
                    newslist.map((news:any)=>(
                        <DiscoverNewsCard blok={news.stories[0]} variant="black" key={news.stories[0].uuid} />
                    ))
                }
            </div>
        </div>
    )
}

export function DiscoverNewsCard({blok,variant="white"}:{blok:any,variant?:string}){
    
    //console.log(blok)
    const {content}=blok;
    //console.log(blok.slug)
    return(
        <div className={`flex flex-col md:w-[336px] gap-[24px] ${variant=='black'?'bg-black text-white':null}`} id={blok.anchor_id}>
            <div className=" relative h-[300px]">
                <Image src={content.image.filename} alt={content.image.alt} fill />
            </div>
            <div className=" flex gap-[16px] text-[DM Mono] text-[14px] items-center ">
                <text className={`py-[4px] px-[8px] ${variant=="black"?"text-B-Yellow":null}`}>{content.category}</text>
                <text className=" font-[500]">{content.readtime}</text>
            </div>
            <div className="flex flex-col gap-[8px]">
                <text className=" heading4">{content.name}</text>
                <text className=" text-[16px] leading-[25.6px]">{content.overview}</text>
            </div>
            <Pagelink url={blok.slug} variant="white" width="200px" />
        </div>
    )
}

async function fetchData(uuid:string) {
    const storyblokApi = getStoryblokApi();
    return storyblokApi.get(`cdn/stories/`, { version: "published",by_uuids:uuid});
  }