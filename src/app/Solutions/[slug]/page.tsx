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