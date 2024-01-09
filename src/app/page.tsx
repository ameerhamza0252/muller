import {
  getStoryblokApi,
} from "@storyblok/react/rsc";

// 1. Import the Storyblok client
import StoryblokStory from "@storyblok/react/story";


import type { Metadata, ResolvingMetadata } from 'next'
export const generateMetadata=async():Promise<Metadata>=>{
  const {data}= (await fetchData());
  const {meta_data}=data.story.content
  if(!meta_data){
    console.log("No meta_data found")
    return{
      title:"Muller"
    }
  }
  const keywords=meta_data[0].keywords.map((w:any)=>w.name)

  return{
      title:meta_data[0].title,
      description:meta_data[0].description,
      keywords:keywords,
      openGraph:{
        images:[meta_data[0].image.filename]
      },
      icons:[meta_data[0].image.filename]
  }
}

export default async function Home() {
  //const storyblokApi = getStoryblokApi();
  //const forcv= await storyblokApi.get(`cdn/stories`, { version: "draft" });
  //console.log(forcv.data.cv)
  const { data } = await fetchData();
  
  //console.log(data)
  return (
    <>
      <StoryblokStory story={data.story} />
    </>
  );
}

async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, { version: "published"});
}
