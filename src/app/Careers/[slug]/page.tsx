import { getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";

export default async function CareerPost({params:{slug}}:{params:{slug:string}}) {
    const story=await (await fetchData(slug)).data.stories[0]
    //console.log(story)
    return(
        <>
            <StoryblokStory story={story} />
        </>
    )
}

async function fetchData(slug:string) {
    const storyblokApi = getStoryblokApi();
    return storyblokApi.get(`cdn/stories/`, { version: "published",by_slugs:"*/"+slug });
  }
