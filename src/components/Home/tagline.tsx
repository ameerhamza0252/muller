"use client"
import { useInterval } from "@chakra-ui/react";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Tagline({blok}:{blok:any}){
    //console.log(blok)
    const [value,setValue]=useState(0);
    const [current,setCurrent]=useState(0)
    //const [isHovered,setIsHovered]=useState(false)
    const locations=blok.locations[0].locationlist

    function handleLocationChange(index:number){
        console.log("Location changed")
        setValue(index);
        setCurrent(0)
    }

    /**
     * useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isHovered) {
            interval = setInterval(() => {
                setCurrent(prevCurrent => (prevCurrent + 1) % locations[value].image.length);
                console.log("Image Changed");
            }, 1500);
        }
        return () => clearInterval(interval); // This is important to clear the interval when the component unmounts
    }, [isHovered]); // The effect will run again if `isHovered`, `value`, or `locations` changes
     * 
     */
    
    

    //console.log(locations[0])
    return(
        <div className=" min-h-screen flex flex-col md:px-[64px] py-[112px] gap-[80px] " style={{backgroundColor:blok.background_color,color:blok.text_color}} id={blok.anchor_id} {...storyblokEditable(blok)}>
            <div className=" grid grid-cols-1 px-[10px] md:px-0">
                <text>{blok.title}</text>
                <text className=" mt-[16px] mb-[24px] heading2">{blok.title}</text>
                <text>{blok.tagline}</text>
            </div>
            <div className=" flex flex-col md:flex-row gap-10 lg:gap-0  md:justify-between ">
                <div className="h-auto max-w-[400px] flex flex-col gap-[29px] px-[20px] ">
                    {locations&&locations.map((l:any,i:number)=>(
                        <button onClick={()=>handleLocationChange(i)} key={l._uid} className={` flex flex-col pl-[10px] md:pl-[27px] text-start`} style={{borderLeft:value==i?`1px solid ${blok.border_color}`:0}}>
                        
                        <text className=" heading3">{l.country}</text>
                        <text className=" lg:leading-[33.6px] mt-[16px] mb-[24px]">{l.location}</text>
                        <Link href={l.link}><text className=" font-['DM_Mono'] font-[500] text-[18px]">{l.linktext}</text></Link>
                        </button>
                    ))}
                </div>
                <div onMouseOver={()=>setCurrent((current+1)%locations[value].image.length)} className=" h-[300px] relative md:w-[542px] md:h-[440px]"><Image src={locations[value].image[current]&&locations[value].image[current].filename} fill objectFit="contain" alt={locations[value].image[current].alt} /></div>
            </div>
        </div>
    )
}