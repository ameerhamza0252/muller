import STop from "@/components/CommonComponents/stop";
import { StoryblokComponent, getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";

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