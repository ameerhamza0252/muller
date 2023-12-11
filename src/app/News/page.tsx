import Blog from "@/components/News/BlogSection";
import NewsTop from "@/components/News/N-Top";
import NewsSection from "@/components/News/NewsSection";
import OptIn from "@/components/News/Signup";
import { getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";

export default async function NewsPage() {
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
    return storyblokApi.get(`cdn/stories/news`, { version: "draft"});
  }
  