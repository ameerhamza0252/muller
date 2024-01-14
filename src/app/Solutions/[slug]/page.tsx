import { returnMetaData } from "@/utils";
import { StoryblokComponent, getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";

import { Metadata, ResolvingMetadata } from "next";
type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }
  
export const generateMetadata=async({params,searchParams}:Props,parent:ResolvingMetadata):Promise<Metadata>=>{
  const {data}= await fetchData(params.slug)
  const {meta_data}=data.stories[0].content
  
  return returnMetaData(meta_data)
}

export default async function SingleSolution({params:{slug}}:{params:{slug:string}}) {
   //console.log(slug)
   const {data}=await fetchData(slug)
   console.log('After Fetch in Solution')
   //console.log(data)
//   const solution=data.stories[0].content;
   //console.log(data)
 return(
    <>
      <StoryblokStory story={data.stories[0]} />
    </>
 )
}

async function fetchData(slug:any) {
   const storyblokApi = getStoryblokApi();
   return storyblokApi.get(`cdn/stories/`, { version: "published", by_slugs:"*/"+slug});
 }