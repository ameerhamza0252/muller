import { Card } from "@/components/CommonComponents/Card";
import { StoryblokComponent, getStoryblokApi, storyblokEditable } from "@storyblok/react";

export default async function Solutions({blok}:{blok:any}){
  console.log('#########################################SSSSSS##############################'   )
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
          
          return(
            <StoryblokComponent blok={data.stories[0].content} uuid={s_uuid} />
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