import { StoryblokComponent } from "@storyblok/react";
//{image,heading,text,link}:{image:string,heading:string,text:string,link:string}
import {motion} from 'framer-motion'
import Image from "next/image";

export default async function Home({blok}:{blok:any}){
  
    return(
        <>

          <Image src={"/loading_image.svg"} alt="loading" fill />
          {
            blok.block.map((b:any)=>(
              <StoryblokComponent blok={b} key={b._uid} />
            ))
          }
        </>
    )
}