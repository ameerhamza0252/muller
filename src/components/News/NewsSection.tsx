import { getStoryblokApi } from "@storyblok/react";
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
    return(
        <div className=" flex flex-col py-[40px] lg:py-[112px] px-[20px] lg:px-[64px] gap-[80px]">
            <div className=" flex flex-col gap-[16px]">
                <text>{blok.title}</text>
                <div className=" flex justify-between ">
                    <div className=" flex flex-col w-3/4">
                        <text className=" heading2">{blok.heading}</text>
                        <text className=" mt-2">{blok.overview}</text>
                    </div>
                    <button className=" self-end px-[24px] py-[12px] border-b-[1px] border-brand">Button</button>
                </div>
            </div>
            <div className=" flex  flex-wrap gap-5">
                {
                    newslist.map((news)=>(
                        <NewsCard blok={news.stories[0]} key={news.stories[0].uuid} />
                    ))
                }
            </div>
        </div>
    )
}

export function NewsCard({blok,variant="white"}:{blok:any,variant?:string}){
    
    //console.log(blok)
    const {content}=blok;
    return(
        <div className={`flex flex-col w-full md:w-[336px] gap-[24px] ${variant=='black'?'bg-black text-white':null}`}>
            <div className=" relative h-[300px]">
                <Image src={content.image.filename} alt={content.image.alt} fill />
            </div>
            <div className=" flex gap-[16px] text-[DM Mono] text-[14px] items-center ">
                <text className={`py-[4px] px-[8px] bg-Light-Grey ${variant=="black"?"text-B-Yellow":null}`}>{content.category}</text>
                <text className=" font-[500]">{content.readtime}</text>
            </div>
            <div className="flex flex-col gap-[8px]">
                <Link href={"News/"+blok.slug}><text className=" heading4">{content.name}</text></Link>
                <text className=" text-[16px] leading-[25.6px]">{content.overview}</text>
            </div>
        </div>
    )
}

async function fetchData(uuid:string) {
    const storyblokApi = getStoryblokApi();
    return storyblokApi.get(`cdn/stories/`, { version: "published",by_uuids:uuid});
  }
  