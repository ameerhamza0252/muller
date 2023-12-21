import { getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";

import { Metadata, ResolvingMetadata } from "next";
type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }
  
export async function generateMetadata({params,searchParams}:Props,parent:ResolvingMetadata):Promise<Metadata>{
  const {data}= (await fetchData());
  const {meta_data}=data.story.content
  
  return{
    title:meta_data[0].title,
    description:meta_data[0].description,
    keywords:meta_data[0].keywords,
    openGraph:{
      images:[meta_data[0].image.filename]
    }
  }
}

export default async function Careers(){
    const {data}=await fetchData()
    //console.log(data)
    return(
        <>
            <StoryblokStory story={data.story} />
        </>
    )
}

async function fetchData() {
    const storyblokApi = getStoryblokApi();
    return storyblokApi.get(`cdn/stories/Careers/`, { version: "published" });
  }