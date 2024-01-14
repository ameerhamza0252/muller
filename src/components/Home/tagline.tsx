"use client"
import { handleMissingColors } from "@/utils";
import { useInterval } from "@chakra-ui/react";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {motion, useInView} from 'framer-motion'
import { AnimateXAxisComponent, AppearFromAbove, AppearFromBelow, ImageFromLeft, ImageFromRight, ImageFromRightFar, transition } from "@/AnimationUtils";

export default function Tagline({blok}:{blok:any}){
    const ref=useRef(null)
    const isInView=useInView(ref,{once:true,margin:"-1px"})

    const [value,setValue]=useState(0);
    const [current,setCurrent]=useState(0)
    const locations=blok.locations[0].locationlist
    let {colors}=blok;
    colors=handleMissingColors(colors)

    function handleLocationChange(index:number){
        setValue(index);
        setCurrent(0)
    }

    return(
        <div ref={ref} className=" overflow-hidden min-h-screen lg:h-auto flex flex-col justify-center md:px-[64px] gap-[80px] " style={{backgroundColor:colors[0].background_color,color:colors[0].text_color}} id={blok.anchor_id} {...storyblokEditable(blok)}>
            {
                isInView&&
                <motion.div variants={AppearFromBelow} initial={AppearFromBelow.start} animate={AppearFromBelow.finish} transition={transition} className=" grid grid-cols-1 px-[10px] md:px-0">
                <p>{blok.title}</p>
                <h2 className=" mt-[16px] mb-[24px]">{blok.heading}</h2>
                <p>{blok.tagline}</p>
                </motion.div>
            }
            <div className=" flex flex-col md:flex-row gap-10 lg:gap-0  md:justify-between ">
                <div className="h-auto max-w-[400px] flex flex-col gap-[29px] px-[20px] ">
                    {locations&&locations.map((l:any,i:number)=>(
                        <button onClick={()=>handleLocationChange(i)} key={l._uid} className={` flex flex-col text-start`} >
                            <div className=" flex gap-[10px] md:gap-[27px]">
                                {value==i&&isInView?<motion.div className=" h-full w-[1px]" variants={AppearFromAbove} initial={AppearFromAbove.start} animate={AppearFromAbove.finish} transition={transition} style={{backgroundColor:colors[0].border_color}}></motion.div>:<div></div>}
                                {
                                    isInView&&
                                    <motion.div variants={AppearFromBelow} initial={AppearFromBelow.start} animate={AppearFromBelow.finish} transition={transition} className=" grid grid-cols-1">
                                        <text className=" heading3">{l.country}</text>
                                        <text className=" lg:leading-[33.6px] mt-[16px] mb-[24px]">{l.location}</text>
                                        <Link href={l.link}><text className=" font-['DM_Mono'] font-[500] text-[18px]">{l.linktext}</text></Link>
                                    </motion.div>
                                }
                            </div>
                        </button>
                    ))}
                </div>
                {isInView&&
                <AnimateXAxisComponent key={value} X={400} className=" h-[300px] relative md:w-[542px] md:h-[440px]">
                    <Image src={locations[value].image[current]&&locations[value].image[current].filename} fill objectFit="contain" alt={locations[value].image[current].alt} onMouseOver={()=>setCurrent((current+1)%locations[value].image.length)} />
                </AnimateXAxisComponent>}
            </div>
        </div>
    )
}