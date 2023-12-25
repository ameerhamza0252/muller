import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

export default async function NewsSection({blok}:{blok:any}) {
    //console.log(blok)
    //console.log("News Section Start")
    const newsPromises = blok.newslist.map(async (uuid: string) => ((await fetchData(uuid)).data));
    const newslist = await Promise.all(newsPromises);

    //console.log(newslist);
    //console.log("NewsList Fetched");
    //console.log(blok)
    const {colors}=blok;
    const button=blok.button[0]
    return(
        <div className=" flex flex-col py-[40px] lg:py-[112px] px-[20px] lg:px-[64px] gap-[80px]" style={{backgroundColor:colors[0].background_color,color:colors[0].text_color}} id={blok.anchor_id} {...storyblokEditable(blok)}>
            <div className=" flex flex-col gap-[16px]">
                <text>{blok.title}</text>
                <div className=" flex justify-between ">
                    <div className=" flex flex-col w-3/4">
                        <text className=" heading2">{blok.heading}</text>
                        <text className=" mt-2">{blok.overview}</text>
                    </div>
                    <Link href={button.link.url} className=" self-end px-[24px] py-[12px] border-b-[1px]" style={{borderBottomColor:button.button_border_color}}>{button.text}</Link>
                </div>
            </div>
            <div className=" flex  flex-wrap gap-5">
                {
                    newslist.map((news)=>(
                        <NewsCard tag_color={blok.card_tag_color} tag_text_color={blok.card_tag_text_color} blok={news.stories[0]} key={news.stories[0].uuid} />
                    ))
                }
            </div>
        </div>
    )
}

export function NewsCard({blok,tag_color,tag_text_color}:{blok:any,tag_color:string,tag_text_color:string}){
    
    //console.log(blok)
    const {content}=blok;
    
    return(
        <Link href={"News/"+blok.slug}>
        <div className={`flex flex-col w-full md:w-[336px] gap-[24px] `}>
            <div className=" relative h-[300px]">
                <Image src={content.image.filename} alt={content.image.alt} fill />
            </div>
            <div className=" flex gap-[16px] text-[DM Mono] text-[14px] items-center ">
                <text className={`py-[4px] px-[8px]`} style={{backgroundColor:tag_color,color:tag_text_color}}>{content.category}</text>
                <text className=" font-[500]">{content.readtime}</text>
            </div>
            <div className="flex flex-col gap-[8px]">
                <text className=" heading4">{content.name}</text>
                <text className=" text-[16px] leading-[25.6px]">{content.overview}</text>
            </div>
        </div></Link>
    )
}

async function fetchData(uuid:string) {
    const storyblokApi = getStoryblokApi();
    return storyblokApi.get(`cdn/stories/`, { version: "published",by_uuids:uuid});
  }
  