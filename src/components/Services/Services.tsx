import { Card } from "@/components/CommonComponents/Card";
import { StoryblokComponent, getStoryblokApi, storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import Pagelink from "../link";
import { render } from "storyblok-rich-text-react-renderer";
import ItemsCard from "../CommonComponents/ItemCard";

export default async function ServicesList({blok}:{blok:any}){
  //console.log(blok)
  //console.log('Services')
  //console.log(blok)
    return(
        <div className=" flex flex-col h-auto py-[30px] lg:py-[95px] px-[10px] md:px-[24px] xl:px-[34px] " >
          <text className=' text-[21px]'>{blok.title}</text>
          <text className="max-w-[620px] heading2 ml-[10px] mt-[30px]" >{blok.heading}</text>
          <div className=' grid grid-cols-1 md:grid-cols-2 justify-center gap-[20px] lg:px-[10px] mt-[30px] lg:mt-[65px]'>
            <ItemsCard buttontext={blok.buttontext} blok={blok.services} />
          </div>
        </div>
    )
}


async function fetchData(s_uuid:any) {
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/`, { version: "published", by_uuids:s_uuid});
}

