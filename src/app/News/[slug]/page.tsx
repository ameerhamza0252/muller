import { HeadingsDescription } from "@/components/News/SingleNews/Components";
import { StoryblokComponent, getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { render } from "storyblok-rich-text-react-renderer";

export default async function News({params:{slug}}:{params:{slug:string}}) {
    //const [margin, setMargin] = useState(20);

    const {data}=await fetchData(slug);
    //let ml=0;
    return(
        <StoryblokStory story={data.stories[0]} />
    )
}

async function fetchData(slug:string) {
    const storyblokApi = getStoryblokApi();
    return storyblokApi.get(`cdn/stories/`, { version: "published",by_slugs:"*/"+slug });
  }