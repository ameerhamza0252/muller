import Heading2 from '@/components/headings/heading'
import bg from '../../public/Icon/home-bg-image.png'
import { storyblokEditable } from '@storyblok/react'
import MediaRenderer from '../MediaComponent'

export default function Numbers({blok}:{blok:any}){
    //console.log(blok.media[0])
    return(
        <div className=" relative h-screen flex items-center md:flex-row justify-between bg-cover " style={{color:blok.text_color}} id={blok.anchor_id} {...storyblokEditable(blok)} >
            <div className=" absolute w-[100%] h-[100%] shadow-inner z-10 "  onPlay={()=>console.log('Playing')} >
            {
                blok.media&&blok.media.map((m:any)=>(
                    <MediaRenderer muted={true} url={m.media.filename} alt={m.media.alt} type={m.type} key={m._uid} />
                ))
            }
            </div>
            <div className=' flex flex-col gap-[30px] md:gap-0 md:flex-row justify-between px-[20px] lg:px-[43px] z-20 w-full '>
                <text className=' heading2 '>{blok.title}</text>
                <div className='h-[440px] grid grid-cols-2 grid-rows-2 rounded-[10px] border-collapse border-[1px] divide-x divide-y  '>
                    {blok.numbers.map((n:any)=>(
                        <div key={n._uid} className=' w-full md:max-w-[220px] h-[220px] flex flex-col items-center justify-center '>
                            <text className=' heading2 text-[45px] leading-[49px]'>
                                {n.number}
                            </text>
                            <text className=' max-w-[114px] text-[14px] leading-[22px]'>{n.text}</text>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}