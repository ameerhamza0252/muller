import { returnMetaData } from "@/utils";
import { getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";

import { Metadata, ResolvingMetadata } from "next";
type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }
  
export async function generateMetadata({params,searchParams}:Props,parent:ResolvingMetadata):Promise<Metadata>{
  const {data}= await fetchData(params.slug);
  const {meta_data}=data.stories[0].content
  
  return returnMetaData(meta_data)
}

export default async function CareerPost({params:{slug}}:{params:{slug:string}}) {
    const story=await (await fetchData(slug)).data.stories[0]
    //console.log(story)
    return(
        <>
            <StoryblokStory story={story} />
        </>
    )
}

async function fetchData(slug:string) {
    const storyblokApi = getStoryblokApi();
    return storyblokApi.get(`cdn/stories/`, { version: "published",by_slugs:"*/"+slug });
  }
