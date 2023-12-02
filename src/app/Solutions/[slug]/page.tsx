import Benefits from "@/components/Solutions/benefits";
import Contact from "@/components/Solutions/contact";
import { StoryblokComponent, getStoryblokApi } from "@storyblok/react";
import Image from "next/image";
import { render } from 'storyblok-rich-text-react-renderer';


export default async function SingleSolution({params:{slug}}:{params:{slug:string}}) {
   //console.log(slug)
   const {data}=await fetchData(slug)
   console.log(data.stories[0].content)
   const solution=data.stories[0].content;
 
 return(
    <>
      <div className=" h-screen bg-cover flex flex-col justify-end py-5 " style={{backgroundImage:`url(${solution.image.filename})`}} >
         <div className=" md:w-[40%] self-end flex flex-col gap-5">
         <text className=" heading1" >Single solution page</text>
         <text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </text>
         </div>
         <Image src="/Icon/down.svg" className=" self-center" alt='scroll' width={50} height={50} />
      </div>
      <div className=" min-h-screen flex flex-col gap-5 p-10 justify-center items-center text-black">
         <text className=" heading1">{solution.title}</text>
         <text>{render(solution.description)}</text>
      </div>
      <div className=" h-screen bg-cover " style={{backgroundImage:`url(${solution.video.filename})`}}>
      </div>
      <Benefits benefits={solution.benefits} />
      <Contact contacts={[{country:'Switzerland',name:'Fahad', link:'Get in touch',image:{filename:'/Icon/Solution.png'}},{country:'Norway',name:'Fahad', link:'Get in touch',image:{filename:'/Icon/Solution.png'}}]} />
    </>
 )
}

async function fetchData(s_uuid:any) {
   const storyblokApi = getStoryblokApi();
   return storyblokApi.get(`cdn/stories/`, { version: "published", by_uuids:s_uuid});
 }