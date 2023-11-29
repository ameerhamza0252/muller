import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";

export default function partners({blok}:{blok:any}){
    //blok=blok[0];
    //console.log(blok)
    return(
        <div className=" min-h-screen flex flex-col bg-[#221E1F] px-[30px] lg:px-[42px] xxl:px-[60px] py-[119px] " {...storyblokEditable(blok)} key={blok._uid} data-test="feature">
            
                <text className=" heading2 ">Our Partners</text>
                <text className=" md:w-[592px] xl:[700px] mt-[40px] ">{blok.description}</text>
                <div className="h-full mt-[350px] flex flex-wrap justify-center gap-[53px] px-[80px]">
                    {
                        blok.partner_logos.map((p:any)=>(
                            <Image key={p._uid} src={p.filename} width={150} height={40} alt={p.alt}/>
                        ))
                    }
                </div>
            
        </div>
    )
}