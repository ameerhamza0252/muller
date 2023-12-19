"use client"
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { useState } from "react";

export default function Projects({blok}:{blok:any}){
    //console.log(blok)
    const {projects}=blok;
    return(
        <div className=" flex flex-col bg-black text-white px-[20px] xl:px-[40px] pt-[20px] pb-[40px] lg:pb-[112px] gap-[30px] lg:gap-y-[90px] items-center " id={blok.anchor_id} {...storyblokEditable(blok)}>
            <text className=" text-B-grey self-start">{blok.title}</text>
            <div className=" flex flex-col text-center gap-[24px]">
                <text className=" heading2">{blok.heading}</text>
                <text>{blok.overview}</text>
            </div>
            {
                projects.map((project:any)=>{
                    const [isExpanded,setIsExpanded]=useState(false)
                    return (
                        <div className=" lg:w-[90%] xl:w-full flex flex-col items-center gap-[24px] xl:px-[20px] py-5" id={blok.anchor_id}  key={project._uid}>
                            <div className=" relative w-full h-[400px] lg:h-[640px] xl:h-[900px] z-10">
                                <Image src={project.image.filename} fill alt={project.image.alt} />
                            </div>
                            <div className={`grid grid-cols-1 md:grid-cols-2  transition-all animate-out ease-in-out duration-1000 } `}>
                                <div>
                                    <text className=" heading4 ">{project.name}</text>
                                    <div className=" flex flex-wrap gap-[8px] font-[DM Mono] text-black text-[14px] leading-[22.4px] font-[500] mt-[16px] ">
                                        {
                                            project.tags.map((tag:any)=>(
                                                <div className=" h-[30px] bg-B-Yellow px-[8px] py-[4px]" key={tag._uid} >{tag.name}</div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className=" flex flex-col justify-between gap-[10px]  text-start">
                                <button onClick={()=>setIsExpanded(!isExpanded)} className={` overflow-clip max-h-[300px] text-start transition-all animate-out ease-in-out duration-1000`}>{project.overview}</button>
                                
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

/**{!isExpanded?<button onClick={()=>setIsExpanded(true)}>Read more...</button>:<button onClick={()=>setIsExpanded(false)}>Read less...</button>} */