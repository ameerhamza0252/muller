import {motion} from 'framer-motion'

export const AppearFromBelow={
    start:{opacity:0,y:75},
    finish:{opacity:1,y:0}
  }

export const ImageFromLeft={
  start:{x:-200},
  finish:{x:0}
}

export const ImageFromRight={
  start:{x:200},
  finish:{x:0}
}

export const transition={duration:0.5,delay:0.25}

export function textToWordsChunksArray({text,chunkSize}:{text:string,chunkSize:number}){
  const titleArray:string[]=text.split(" ").map((e:string)=>e+" ");
  let titleArrayList=[];
  for(let i=0;i<titleArray.length;i+=chunkSize){
    titleArrayList.push(titleArray.slice(i,i+chunkSize))
  }

  return titleArrayList;
}