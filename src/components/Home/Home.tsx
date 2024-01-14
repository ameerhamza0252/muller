import { StoryblokComponent } from "@storyblok/react";
//{image,heading,text,link}:{image:string,heading:string,text:string,link:string}


export default async function Home({blok}:{blok:any}){
  
    return(
        <>
          {
            blok.block.map((b:any)=>(
              <StoryblokComponent blok={b} key={b._uid} />
            ))
          }
        </>
    )
}