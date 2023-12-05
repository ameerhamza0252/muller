import Benefits from "@/components/CommonComponents/benefits";
import Contact from "@/components/CommonComponents/contact";
import { StoryblokComponent, getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";
import Image from "next/image";
import { render } from 'storyblok-rich-text-react-renderer';


export default async function SingleSolution({params:{slug}}:{params:{slug:string}}) {
   //console.log(slug)
   const {data}=await fetchData(slug)
//   console.log(data.stories[0].content)
//   const solution=data.stories[0].content;
   //console.log(data)
 return(
    <>
      <StoryblokStory story={data.stories[0]} />
    </>
 )
}

async function fetchData(s_uuid:any) {
   const storyblokApi = getStoryblokApi();
   return storyblokApi.get(`cdn/stories/`, { version: "published", by_uuids:s_uuid});
 }