import { StoryblokComponent } from "@storyblok/react";

export default async function ContactView({blok}:{blok:any}){
    return(
        <>
            {
                blok.blocks.map((nested:any)=>(
                    <StoryblokComponent blok={nested} key={nested._uid} />
                ))
            }
        </>
    )
}