import { Card } from "@/components/CommonComponents/Card";
import { StoryblokComponent, getStoryblokApi, storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import Pagelink from "../link";
import { render } from "storyblok-rich-text-react-renderer";
import ItemsCards from "../CommonComponents/ItemCard";

export default async function ServicesList({blok}:{blok:any}){
  console.log('Services')
  //console.log(blok)
    return(
        <div className=" flex flex-col h-auto py-[95px] px-[24px] xl:px-[34px] font-[400px] text-[#221E1F] " >
          <text className=' text-[21px]'>{blok.title}</text>
          <text className="w-[620px] heading2 ml-[10px] mt-[30px]" >{blok.heading}</text>
          <div className=' flex flex-wrap xl:justify-between gap-[20px] px-[10px] mt-[65px]'>
            <ItemsCards items={blok.services} />
          </div>
        </div>
    )
}
