import MarketPoints from "@/components/Markets/marketpoints";
import MarketTop from "@/components/Markets/markettop";
import Needs from "@/components/Markets/needs";
import Projects from "@/components/Markets/projects";
import { getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";

export default async function Markets() {
    const {data}=await fetchData()
    
    return(
        <>
            <StoryblokStory story={data.story} />
        </>
    )
}

async function fetchData() {
    const storyblokApi = getStoryblokApi();
    return storyblokApi.get(`cdn/stories/markets/`, { version: "published" });
  }