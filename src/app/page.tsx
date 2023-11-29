import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
    accessToken: process.env.STORYBLOKTOKEN,
    use: [apiPlugin],
    apiOptions:{
        region:"eu",
        https:false,
        cache:{type:'none'}
    }
  });
// 1. Import the Storyblok client


import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

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
  return storyblokApi.get(`cdn/stories/home-page`, { version: "published",  });
}
