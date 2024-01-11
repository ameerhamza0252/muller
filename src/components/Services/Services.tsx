import {  getStoryblokApi, storyblokEditable } from "@storyblok/react";

import ItemsCard from "../CommonComponents/ItemCard";
import { handleMissingColors } from "@/utils";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default async function ServicesList({blok}:{blok:any}){
  const ref = useRef(null)
  const isInView = useInView(ref)

  let {colors}=blok;
    colors=handleMissingColors(colors)

    return(
        <div className=" flex flex-col h-auto py-[30px] lg:py-[95px] md:px-[24px] xl:px-[34px] " style={{backgroundColor:colors[0].background_color,color:colors[0].text_color}} id={blok.anchor_id} {...storyblokEditable(blok)}>
          <text className=' text-[21px]'>{blok.title}</text>
          <text className="max-w-[620px] heading2 mt-[30px]" >{blok.heading}</text>
          <div className=' grid grid-cols-1 md:grid-cols-2 justify-center gap-[20px] lg:px-[10px] mt-[30px] lg:mt-[65px]'>
            <ItemsCard isInView={isInView} divider_color={blok.card_divider_color} link_variant={colors[0].link_variant} buttontext={blok.buttontext} blok={blok.services} />
          </div>
        </div>
    )
}


async function fetchData(s_uuid:any) {
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/`, { version: "published", by_uuids:s_uuid});
}

