import { StoryblokComponent } from "@storyblok/react";

export default async function ServicesPage({blok}:{blok:any}) {
    //console.log(blok)
    return(
        <div className="flex flex-col gap-[0.5px]">
            {
                blok.blocks.map((nested:any)=>(
                    <StoryblokComponent blok={nested} key={nested._uid} />
                ))
            }
        </div>
    )
}