import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";

storyblokInit({
    accessToken: process.env.STORYBLOKTOKEN,
    use: [apiPlugin],
    apiOptions:{
        region:"eu",
        https:true
    }
  });
// 1. Import the Storyblok client


export default async function HomePage() {
    const { data } = await fetchData();
    //console.log(data)
    return (
      <div>
        <StoryblokStory story={data.story} />
      </div>
    );
  }
  
  export async function fetchData() {
    const storyblokApi = getStoryblokApi();
    return storyblokApi.get(`cdn/stories/home-page`, { version: "published" });
  }
  