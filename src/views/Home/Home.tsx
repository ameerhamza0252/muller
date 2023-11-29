export const revalidate=0;
;
import Image from 'next/image'
import Link from 'next/link';
import { BiRightArrowAlt } from "react-icons/bi";
import { StoryblokComponent, getStoryblokApi } from "@storyblok/react"
import { Storyblok } from '@/utils';
import { storyblokEditable } from "@storyblok/react";
import Solutions from '../Solutions/Solutions';


export default async function Home({blok}:{blok:any}){
  //const {data}=await Storyblok.get('cdn/stories/home-page');
  //const items=data.story.content;
  console.log(blok.USP)
  console.log('====================================================================================================================================')
  //const top=(items.filter((i:any)=>{return i.component=='Top'}))[0]
    return(
        <>{
          Object.values(blok).map((n:any)=>(
            <StoryblokComponent blok={n[0]} key={n._uid} />
          ))
        }
        </>
    )
}

/**
 * <TOP top={blok.top[0]} />
          <Solutions/>
          <Services/>
          <USP USP={blok.USP} />
          <Numbers Numbers={blok.Numbers} />
          
          <Testimonials testimonials={blok.testimonials} />
          <Tagline tagline={blok.tagline} locations={blok.locations} />
 */
