import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

export default function partners({blok}:{blok:any}){
    //blok=blok[0];
    //console.log(blok.partners[0])
    return(
        <div className=" min-h-screen flex flex-col px-[30px] lg:px-[42px] xxl:px-[60px] py-[119px] " style={{backgroundColor:blok.background_color,color:blok.text_color}} id={blok.anchor_id} {...storyblokEditable(blok)} key={blok._uid} data-test="feature">
            
                <h2 className=" ">{blok.heading}</h2>
                <p className=" md:w-[592px] xl:[700px] mt-[40px] ">{blok.description}</p>
                <div className="h-full mt-[350px] flex flex-wrap justify-center gap-[53px] px-[80px]">
                    {
                        blok.partners.map((p:any)=>(
                            <Link href={p.url.url}><Image key={p._uid} src={p.image.filename} width={150} height={40} alt={p.image.alt}/></Link>
                        ))
                    }
                </div>
            
        </div>
    )
}