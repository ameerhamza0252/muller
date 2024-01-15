"use client"
import { StoryblokComponent } from "@storyblok/react";
import {motion} from 'framer-motion'
import Image from "next/image";
import { useState, useEffect } from "react";
import { RevealAnimationComponent } from "../RevealAnimation";

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
      <RevealAnimationComponent />
      {
        blok.block.map((b:any)=>(
          <StoryblokComponent blok={b} key={b._uid} />
        ))
      }
    </>
  )
}
