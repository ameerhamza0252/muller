import { StoryblokComponent } from "@storyblok/react"

export default async function NewsView({blok}:{blok:any}) {
    //console.log(blok)
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