import { StoryblokComponent } from "@storyblok/react";
//{image,heading,text,link}:{image:string,heading:string,text:string,link:string}


export default async function Home({blok}:{blok:any}){
  console.log('Home page')
  //console.log(blok)
  
    return(
        <div className=" flex flex-col gap-[0.5px]">
          {
            blok.block.map((b:any)=>(
              <StoryblokComponent blok={b} key={b._uid} />
            ))
          }
        </div>
    )
}