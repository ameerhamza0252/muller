import useSWR from 'swr'
import { getStoryblokApi } from "@storyblok/react"
import Image from "next/image"
import Pagelink from "../link"
import { render } from "storyblok-rich-text-react-renderer"
import { useEffect, useState } from "react";


export default function ItemsCard({blok}:{blok:any}) {
  //console.log("Inside Card")
  //console.log(blok)
  const { data, error, isLoading }=useSWR(blok,getDataList)
  console.log('ItemsCards Fetched')
  //console.log(data)
  if(isLoading){
    return(
      <div>Loading ....</div>
    )
  }
  if (error) return "An error has occurred"
    return(
        <>
          {
            data&&data.map((blok:any)=>{
              const stop=blok.content.blocks.filter((b:any)=>b.component=="stop")[0]
              const info=blok.content.blocks.filter((b:any)=>b.component=="info")
              //console.log(stop)
              return(
                <div className=' flex flex-col md:w-[450px] lg:w-[700px] xl:w-[800px]  min-h-[600px] lg:h-[936px] xl:h-auto justify-stretch px-[10px] gap-[20px] py-[18px] xl:py-[30px]' key={blok.uuid} >
                  <div className=' relative w-full min-h-[358px] lg:h-[450px]'>
                      <Image src={stop.image.filename} alt={stop.image.alt} fill />
                  </div>
                  <text className=' heading2 max-h-[200px] overflow-hidden w-[80%]'>{stop.heading}</text>
                  <div className="w-[90%] border-b-[1px] border-brand" ></div>
                  <text className=' w-[90%] h-[150px] overflow-hidden  my-[8px]'>{render(info[0].description)}</text>
                  <Pagelink url={blok.full_slug} text="Click me" />
                </div>
              )
            })
          }
        </>
    )
}

async function fetchData(s_uuid:any) {
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/`, { version: "published", by_uuids:s_uuid});
}

async function getDataList(solutions:string[]){
  const promisList=solutions.map(async(s_uuid:string) =>(await fetchData(s_uuid)).data.stories[0])
    const dataResults = await Promise.all(promisList).then((data)=>{return data});
    //console.log(dataResults)
    return dataResults;
}


// export default function ItemsCards({items}:{items:any}) {
//   const [dataResults, setDataResults] = useState([] as any[]);

//   useEffect(() => {
//       const fetchDataForItems = async () => {
//           const dataPromises = items.map((s_uuid:string) => fetchData(s_uuid));
//           const results = await Promise.all(dataPromises);
//           setDataResults(results);
//       };

//       fetchDataForItems();
//   }, [items]);
//     return(
//         <>
//             {dataResults.map(async (s_uuid:string)=>{
//             const {data}=await fetchData(s_uuid)
//             //console.log(data)
//             //console.log(data.stories[0])
//             const blok=data.stories[0].content
//             if(!blok){
//               return null
//             }
//             const stop=blok.blocks.filter((b:any)=>b.component=="stop")
//             const info=blok.blocks.filter((b:any)=>b.component=="info")
//             return(
//               <div className=' flex flex-col md:w-[450px] lg:w-[550px] xl:w-[800px] min-h-[600px] h-[936px] xl:h-auto px-[10px] gap-[20px] py-[18px] xl:py-[30px]' key={data.stories[0]._uid} >
//                 <Image src={stop[0].image.filename} alt={stop[0].image.alt} width={520} height={358} style={{width:'100%',objectFit:'contain'}} />
//                 <text className=' heading2 w-[80%]'>{info[0].title}</text>
//                 <div className="w-[90%] border-b-[1px] border-[#00918E]" ></div>
//                 <text className=' w-[90%] h-min-[165px] overflow-hidden  my-[8px]'>{render(info[0].description)}</text>
//                 <Pagelink url={data.stories[0].full_slug} text="Click me" />
//               </div>
//             )
//           })}
//         </>
//     )
// }