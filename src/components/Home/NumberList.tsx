import { storyblokEditable } from '@storyblok/react'
import MediaRenderer from '../MediaComponent'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import {motion} from 'framer-motion'
import { AppearFromBelow, ImageFromRight, slightlyLongerTransition, transition } from '@/AnimationUtils'

export default function Numbers({blok}:{blok:any}){
    const ref=useRef(null)
    const isInView=useInView(ref,{once:true,margin:"-1px"})
    return(
        <div className=" relative h-screen flex items-center md:flex-row justify-between bg-cover " ref={ref} style={{color:blok.text_color}} id={blok.anchor_id} {...storyblokEditable(blok)} >
            <div className=" absolute w-[100%] h-[100%] shadow-inner z-10 "  onPlay={()=>console.log('Playing')} >
            {
                blok.media&&blok.media.map((m:any)=>(
                    <MediaRenderer muted={true} url={m.media.filename} alt={m.media.alt} type={m.type} key={m._uid} />
                ))
            }
            </div>
            <div className=' flex flex-col gap-[30px] md:gap-0 md:flex-row justify-between px-[20px] lg:px-[43px] z-20 w-full '>
                {isInView&&<motion.h2 variants={AppearFromBelow} initial={AppearFromBelow.start} animate={AppearFromBelow.finish} transition={transition}  className=' '>{blok.title}</motion.h2>}
                {
                    isInView&&
                    <motion.div variants={ImageFromRight} initial={ImageFromRight.start} animate={ImageFromRight.finish} transition={transition} 
                        className='h-[440px] grid grid-cols-2 grid-rows-2 rounded-[10px] border-collapse border-[1px] divide-x divide-y  '>
                    {blok.numbers.map((n:any)=>(
                        <div key={n._uid} className=' w-full md:min-w-[220px] md:max-w-[330px] h-[220px] flex flex-col items-center justify-center '>
                            {
                                isInView&&
                                <motion.div  variants={ImageFromRight} initial={ImageFromRight.start} animate={ImageFromRight.finish} transition={slightlyLongerTransition} className=' flex flex-col'>
                                    <text className=' heading2 text-[45px] leading-[49px]'>{n.number}</text>
                                    <text className=' text-[14px] leading-[22px]'>{n.text}</text>
                                </motion.div>
                            }
                            
                        </div>
                    ))}
                    </motion.div>
                }
            </div>
        </div>
    )
}