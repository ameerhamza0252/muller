import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

export default async function BlogSection({blok}:{blok:any}) {
    //console.log(blok.blogs)
    return(
        <div className=" flex flex-col px-[20px] lg:px-[68px] pt-[13px] pb-[40px] lg:pb-[113px] " id={blok.anchor_id} {...storyblokEditable(blok)}>
            <text className=" pl-2">{blok.title}</text>
            <div className=" flex flex-col self-center md:text-center ">
                <text className=" heading1">{blok.heading}</text>
                <text>{blok.overview}</text>
            </div>
            <div className=" flex flex-wrap mt-[50px] lg:mt-[105px]">
                {
                    blok.blogs.map((blog:any)=>(
                        <div className=" flex flex-col md:w-[500px] gap-[24px]" key={blog._uid}>
                            <div className=" relative h-[400px]">
                                <Image src={blog.image.filename} alt={blog.image.alt} fill />
                            </div>
                            <div className=" flex gap-[16px] text-[DM Mono] text-[14px] items-center ">
                                <text className=" py-[4px] px-[8px] bg-Light-Grey">{blog.category}</text>
                                <text className=" font-[500]">{blog.time}</text>
                            </div>
                            <div className="flex flex-col gap-[8px]">
                                <Link href={blog.link.url}><text className=" heading4">{blog.name}</text></Link>
                                <text className=" text-[16px] leading-[25.6px]">{blog.overview}</text>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}