import { StoryblokComponent } from "@storyblok/react";

export default function Page({blok}:{blok:any}){
    //console.log(blok)
    return(
        <>{
          (blok.block).map((n:any)=>(
            <StoryblokComponent blok={n} key={n._uid} />
          ))
        }
        </>
    )
}