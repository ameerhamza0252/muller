
export function HandleMissingTags(heading_tags:any[]){
  if(!heading_tags){
    heading_tags=[{Primary:"h1",Secondary:"h2"}]
  }
  return heading_tags[0]; 
}

export function handleMissingColors(colors:any){
  if(!colors){
    return colors=[{}]
  }
  return colors;
}

export const screenSizes={
  md:800,
  lg:1180,
  xl:1900,
}