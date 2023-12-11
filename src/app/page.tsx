import {
  getStoryblokApi,
} from "@storyblok/react/rsc";

// 1. Import the Storyblok client
import StoryblokStory from "@storyblok/react/story";

export default async function Home() {
  //const storyblokApi = getStoryblokApi();
  //const forcv= await storyblokApi.get(`cdn/stories`, { version: "draft" });
  //console.log(forcv.data.cv)
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
  return storyblokApi.get(`cdn/stories/home`, { version: "published"});
}
