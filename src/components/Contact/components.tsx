import Image from "next/image";
import Pagelink from "../link";
import { GetInTouch } from "../Career/SingleCareerClient";
import MediaRenderer from "../MediaComponent";

export function ContactTopGrid({blok}:{blok:any}){
    //console.log(blok.image_list1)
    const link=blok.link[0]
    return(
        <div className=" min-h-screen md:h-screen flex items-center justify-between px-[20px] md:px-[64px]" id="image-grid">
                <div className=" flex flex-col gap-[24px]">
                    <text className=" heading1">{blok.heading}</text>
                    <text>{blok.subheading}</text>
                    <Pagelink url={link.url.url} text={link.Lable} variant="green" />
                </div>
                <div className=" grid grid-cols-2 gap-[16px] ">
                    <div className="  flex flex-col overflow-auto scroll-m-2 scroll-smooth h-screen snap-y snap-mandatory gap-[16px]">
                        {
                        blok.image_list1&&blok.image_list1.map((image:any)=>(
                            <div className=" relative  snap-always snap-center w-[264px] min-h-[340px]">
                                <Image src={image.filename} priority fill alt={image.alt} key={image._uid} />
                            </div>
                        ))
                    }
                    </div>
                    <div className=" flex flex-col overflow-y-auto scroll-smooth h-screen snap-y snap-mandatory gap-[16px]">
                    {
                        blok.image_list2&&blok.image_list2.map((image:any)=>(
                            <div className=" relative  snap-always snap-center w-[264px] min-h-[340px]">
                                <Image src={image.filename} fill alt={image.alt} key={image._uid}  />
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
    )
}

export function GetInTouchGrid({blok}:{blok:any}){
    //console.log(blok)
    return(
        <div className=" min-h-screen md:h-screen grid grid-cols-1 md:grid-cols-2 justify-between px-[20px] md:px-[64px] py-[40px] lg:py-[112px] gap-4">
                <div className=" relative h-[90%] pointer-events-none ">
                {
                    blok.media&&blok.media.map((m:any)=>(
                        <MediaRenderer muted={true} url={m.media.filename} alt={m.media.alt} type={m.type} key={m._uid} />
                    ))
                }
                </div>
                <GetInTouch blok={blok.GetInTouch[0]} />
            </div>
    )
}