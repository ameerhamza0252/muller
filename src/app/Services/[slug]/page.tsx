
import { StoryblokComponent, getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";

export default async function Service({params:{slug}}:{params:{slug:string}}) {
   console.log(slug)
   const {data}=await fetchData(slug)
   const service=data.stories[0]
   console.log(service);
   console.log("Servie SLUG")
   //console.log(service)
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