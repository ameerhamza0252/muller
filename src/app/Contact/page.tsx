import { GetInTouch } from "@/components/Career/SingleCareerClient";
import Pagelink from "@/components/link";
import { getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";
import Image from "next/image";

export default async function Contact(){
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
    return storyblokApi.get(`cdn/stories/contact/`, { version: "published" });
  }