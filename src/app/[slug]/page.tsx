import { getStoryblokApi } from "@storyblok/react";
//import { render } from "storyblok-rich-text-react-renderer";
import {render} from 'storyblok-rich-text-react-renderer-ts';

import type { Metadata, ResolvingMetadata } from 'next'
import { returnMetaData } from "@/utils";

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }
  
export async function generateMetadata({params,searchParams}:Props,parent:ResolvingMetadata):Promise<Metadata>{
  const {data}= await fetchData(params.slug);
  const {meta_data}=data.stories[0].content
  
  return returnMetaData(meta_data)
}

export default async function Page({params:{slug}}:{params:{slug:any}}){
    //console.log(slug)
    const {data}=await fetchData(slug)
    const story=data.stories[0]
    //console.log(story)
    return(
        <div className=" min-h-screen px-[20px] py-[40px] lg:py-[112px] ">
            {render(story.content.pagedata)}
        </div>
    )
}

async function fetchData(slug:string) {
    const storyblokApi = getStoryblokApi();
    return storyblokApi.get(`cdn/stories/`, { version: "published",by_slugs:slug});
  }
