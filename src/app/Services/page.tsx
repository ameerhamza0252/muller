import STop from "@/components/CommonComponents/stop";
import { StoryblokComponent, getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";

import { Metadata, ResolvingMetadata } from "next";
type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }
  
export const generateMetadata=async():Promise<Metadata>=>{
  const {data}=await fetchData()
  const {meta_data}=data.story.content
  console.log(data)
  console.log(meta_data)
  if(!meta_data){
    console.log("No meta_data found")
    return{
      title:"Muller"
    }
  }
  return{
    title:meta_data[0].title,
    description:meta_data[0].description,
    keywords:meta_data[0].keywords,
    openGraph:{
      images:[meta_data[0].image.filename]
    }
  }
}

export default async function Services(){
    console.log("Services Page")
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
    return storyblokApi.get(`cdn/stories/Services/`, { version: "published" });
  }