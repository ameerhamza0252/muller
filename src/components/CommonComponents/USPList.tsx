import { AppearFromBelow, slightlyLongerTransition, transition } from "@/AnimationUtils";
import Pagelink from "@/components/link";
import { handleMissingColors } from "@/utils";
import { storyblokEditable } from "@storyblok/react";
import { motion, useInView} from 'framer-motion'
import { useRef } from "react";
export default function USPList({blok}:{blok:any}){
  const ref=useRef(null)
  const isInView=useInView(ref,{once:true,margin:"-1px"})

  const links=blok.link
  const {usplist}=blok;
  let {colors}=blok;
    colors=handleMissingColors(colors)
  
    return(
      <>
      
        <div className={` relative flex flex-col h-auto py-[40px] md:py-[95px] px-[10px] md:px-[20px] lg:px-[41px] font-[300]`} ref={ref} style={{backgroundColor:colors[0].background_color,color:colors[0].text_color}}  id={blok.anchor_id} {...storyblokEditable(blok)}>
        {isInView&&<motion.text variants={AppearFromBelow} initial={AppearFromBelow.start} animate={AppearFromBelow.finish} transition={transition} className=' text-[21px]'>{blok.title}</motion.text>}
        <div className=' flex md:justify-between gap-[20px] lg:px-[10px] mt-[30px] lg:mt-[65px] items-end'>
        {isInView&&<motion.h2 variants={AppearFromBelow} initial={AppearFromBelow.start} animate={AppearFromBelow.finish} transition={transition} className=" heading2 ml-[10px] mt-[15px] lg:mt-[30px]" >{blok.heading}</motion.h2>}
          {
            isInView&&links.map((link:any)=>(
              <motion.span className=" w-full max-w-[300px]" variants={AppearFromBelow} initial={AppearFromBelow.start} animate={AppearFromBelow.finish} transition={transition}>
                <Pagelink key={link._uid} url={link.url.url} text={link.Lable} variant={colors[0].link_variant} /> 
              </motion.span>
            ))
          }
        </div>
        <div className=" w-full lg:w-3/4 self-end flex flex-col mt-[30px] lg:mt-[150px] lg:px-5 ">
          {
            isInView&&usplist.map((u:any)=>(
              <motion.div variants={AppearFromBelow} initial={AppearFromBelow.start} animate={AppearFromBelow.finish} transition={transition} key={u._uid} className=" h-[150px] grid grid-cols-2 pt-[28px]  w-full ">
              <text>
              {u.title}
              </text>
              <motion.text variants={AppearFromBelow} initial={AppearFromBelow.start} animate={AppearFromBelow.finish} transition={transition} className=" max-h-[200px] overflow-hidden">
              {u.description}
              </motion.text>
            </motion.div>
            ))
          }
        </div>
      </div>
      </>
    )
}