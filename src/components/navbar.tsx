"use client"
import Image from "next/image";
import Link from "next/link";
import MenueButton from "./NavBar/menu";

export function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function Navigation({blok}:{blok:any}){
    //const {data}=await Storyblok.get('cdn/stories/navigation', {version:"published"});
    //const items=data.story.content.name;
    //console.log("NAVBAR")
    //console.log((blok.name[0]))
    return(
        <div className=" absolute hidden md:visible w-full h-[70px] md:flex justify-between text-white z-20">
            <div className=" h-[35px] w-[166px] bg-[url('/Icon/muller-technology-logo1.svg')] mt-[13px] ml-[18px]"></div>
            <div className=" flex justify-end items-center w-auto bg-[#00918E] gap-[20px] px-[20px] py-[15px] text-[21px] font-[400] rounded-bl-[8px]">
                {
                    blok.name.map((i:any)=>{
                        //console.log(i)
                        return((
                            <Link href={i.url.cached_url=="home"?"/":"/"+capitalizeFirstLetter(i.url.cached_url.split("/")[0])} key={i._uid} ><text >{i.Lable}</text></Link>
                        ))
                    })
                }
                <MenueButton/>
                <Image src="/Icon/Youtube.svg" alt="youtube" width={24} height={24} />
                <Image src="/Icon/LinkedIn3.svg" alt="linkedin" width={24} height={24} />
            </div>
        </div>
    )
}