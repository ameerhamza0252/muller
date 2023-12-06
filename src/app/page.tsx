import {
  getStoryblokApi,
} from "@storyblok/react/rsc";

// 1. Import the Storyblok client
import StoryblokStory from "@storyblok/react/story";

export default async function Home() {
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
  return storyblokApi.get(`cdn/stories/home`, { version: "published" });
}
