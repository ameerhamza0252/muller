
export function HandleMissingTags(heading_tags:any[]){
  if(!heading_tags){
    heading_tags=[{Primary:"h1",Secondary:"h2"}]
  }
  return heading_tags[0]; 
}