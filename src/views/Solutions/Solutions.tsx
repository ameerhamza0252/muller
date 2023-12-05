import Pagelink from "@/components/link";
import { StoryblokComponent, getStoryblokApi, storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

export default async function Solutions({blok}:{blok:any}){
  //console.log('#########################################SSSSSS##############################'   )
  //console.log(blok)
    return(
        <div className=" flex flex-col h-auto py-[95px] px-[24px] xl:px-[34px] font-[400px] text-[#221E1F] " {...storyblokEditable(blok)}  id='solutuions'>
      <text className=' text-[21px]'>
        Our solutions
      </text>
      <text className="w-[620px] heading2 ml-[10px] mt-[30px]" >Lorem ipsum dolor 2 amet</text>
      <div className=' flex flex-wrap xl:justify-between gap-[20px] px-[10px] mt-[65px]'>
        {blok.solutions.map(async (s_uuid:string)=>{
          const {data}=await fetchData(s_uuid)
          const blok=data.stories[0].content
          const stop=blok.blocks.filter((b:any)=>b.component=="stop")
          const info=blok.blocks.filter((b:any)=>b.component=="info")
          return(
            <div className=' flex flex-col md:w-[450px] lg:w-[550px] xl:w-[800px] min-h-[600px] h-[936px] xl:h-auto px-[10px] gap-[20px] py-[18px] xl:py-[30px]'>
              <Image src={stop[0].image.filename} alt={stop[0].image.alt} width={520} height={358} style={{width:'100%',objectFit:'contain'}} />
              <text className=' heading2 w-[80%]'>{info[0].title}</text>
              <div className="w-[90%] border-b-[1px] border-[#00918E]"/>
              <text className=' w-[90%] h-min-[165px] overflow-hidden  my-[8px]'>{render(info[0].description)}</text>
              <Link href={`/Solutions/${s_uuid}`} ><Pagelink text="Click me" url={`/Solutions/${blok._uid}`} /></Link>
            </div>
          )
        })}
      </div>
    </div>
    )
}

async function fetchData(s_uuid:any) {
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/`, { version: "published", by_uuids:s_uuid});
}