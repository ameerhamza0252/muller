"use server"
import { getStoryblokApi } from "@storyblok/react";

export async function getDataList(solutions:string[]){
  const promisList=solutions.map(async(s_uuid:string) =>(await fetchData(s_uuid)).data.stories[0])
    const dataResults = await Promise.all(promisList);
    return dataResults;
}

async function fetchData(s_uuid:any) {
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/`, { version: "published", by_uuids:s_uuid});
}