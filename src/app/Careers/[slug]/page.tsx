import { getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";

// import { Metadata, ResolvingMetadata } from "next";
// type Props = {
//     params: { slug: string }
//     searchParams: { [key: string]: string | string[] | undefined }
//   }
  
// export async function generateMetadata({params,searchParams}:Props,parent:ResolvingMetadata):Promise<Metadata>{
//   const {data}= (await fetchData(params.slug));
//   const {meta_data}=data.stories[0].content
  
//   return{
//     title:meta_data[0].title,
//     description:meta_data[0].description,
//     keywords:meta_data[0].keywords,
//     openGraph:{
//       images:[meta_data[0].image.filename]
//     }
//   }
// }

export default async function CareerPost({params:{slug}}:{params:{slug:string}}) {
    const story=await (await fetchData(slug)).data.stories[0]
    //console.log(story)
    return(
        <>
            <StoryblokStory story={story} />
        </>
    )
}

async function fetchData(slug:string) {
    const storyblokApi = getStoryblokApi();
    return storyblokApi.get(`cdn/stories/`, { version: "published",by_slugs:"*/"+slug });
  }
