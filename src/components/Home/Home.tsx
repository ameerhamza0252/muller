"use client"
import { StoryblokComponent } from "@storyblok/react";
import {motion} from 'framer-motion'
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home({blok}:{blok:any}){
  const [isLoading,setIsLoading]=useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Loading finished!");
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return(
    <>
      {
        isLoading &&
        <div className={`h-screen absolute w-screen bg-cover overflow-hidden hide-scroll z-[100] $`} >
          <Image className={isLoading ? 'zoom' :""} alt="" style={{position:"absolute"}} fill src={"/loading_image.svg"} />
        </div>
      }
      {
        blok.block.map((b:any)=>(
          <StoryblokComponent blok={b} key={b._uid} />
        ))
      }
    </>
  )
}
