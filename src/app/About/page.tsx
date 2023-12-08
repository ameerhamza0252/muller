import AboutusView from "@/views/About us/Aboutus";
import { getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";

export default async function Aboutus() {
    const {data}=await fetchData()
    //console.log(data)
    return(
        <StoryblokStory story={data.story} />
    )
}

async function fetchData() {
    const storyblokApi = getStoryblokApi();
    return storyblokApi.get(`cdn/stories/about`, { version: "draft"});
  }