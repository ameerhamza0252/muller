import Pagelink from "@/components/link";
import { storyblokEditable } from "@storyblok/react";

export default function USPList({blok}:{blok:any}){
  const variant=blok.variant
  //console.log(blok.link)
  const links=blok.link
  const {usplist}=blok;
  const {colors}=blok;
  
    return(
        <div className={` relative flex flex-col h-auto py-[40px] md:py-[95px] px-[10px] md:px-[20px] lg:px-[41px] font-[300]`} style={{backgroundColor:colors[0].background_color,color:colors[0].text_color}}  id={blok.anchor_id} {...storyblokEditable(blok)}>
        <text className=' text-[21px]'>{blok.title}</text>
        <div className=' flex md:justify-between gap-[20px] lg:px-[10px] mt-[30px] lg:mt-[65px] items-end'>
          <text className=" heading2 ml-[10px] mt-[15px] lg:mt-[30px]" >{blok.heading}</text>
          {
            links.map((link:any)=>(
              <Pagelink key={link._uid} url={link.url.url} text={link.Lable} variant={colors[0].link_variant} /> 
            ))
          }
        </div>
        <div className=" w-full lg:w-3/4 self-end flex flex-col mt-[30px] lg:mt-[150px] lg:px-5 ">
          {
            usplist.length?usplist.map((u:any)=>(
              <div key={u._uid} className=" h-[150px] grid grid-cols-2 pt-[28px]  w-full ">
              <text>
              {u.title}
              </text>
              <text className=" overflow-hidden">
              {u.description}
              </text>
            </div>
            )):(
              <div key={blok._uid} className=" h-[150px] grid grid-cols-2 pt-[28px] ">
              <text>
              {blok.title}
              </text>
              <text className=" overflow-hidden">
              {blok.description}
              </text>
            </div>
            )
          }
        </div>
      </div>
    )
}