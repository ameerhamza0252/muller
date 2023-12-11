import Blog from "@/components/News/Blog";
import NewsTop from "@/components/News/N-Top";
import NewsSection from "@/components/News/News";
import OptIn from "@/components/News/OptIn";
import { getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";

export default async function NewsPage() {
    const {data}=await fetchData()
    return(
        <>
            <StoryblokStory story={data.story} />
        </>
    )
}

async function fetchData() {
    const storyblokApi = getStoryblokApi();
    return storyblokApi.get(`cdn/stories/home`, { version: "draft"});
  }
  