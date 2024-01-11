import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function SolutionsPage({blok}:{blok:any}){
    //console.log(blok)
    return(
        <div className="flex flex-col gap-[0.5px]">
        {blok.blocks.map((b:any)=>(
                <StoryblokComponent key={b._uid} blok={b} />
            ))}

        </div>
    )
}