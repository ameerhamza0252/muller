import {motion} from 'framer-motion'

export const AppearFromBelow={
    start:{opacity:0,y:75},
    finish:{opacity:1,y:0}
  }

export const AppearFromAbove={
    start:{opacity:0,y:-75},
    finish:{opacity:1,y:0}
  }

export const AppearFromBottom={start:{opacity:0,y:400},finish:{opacity:1,y:0}};
export const ImageFromLeft={
  start:{x:-200},
  finish:{x:0}
}
export const ImageFromLeftFar={
  start:{x:-400},
  finish:{x:0}
}

export const ImageFromRight={
  start:{x:200},
  finish:{x:0}
}
export const ImageFromRightFar={
  start:{x:"100vw"},
  finish:{x:0}
}
export const transition={duration:0.5,delay:0.3}
export const slightlyLongerTransition={duration:1,delay:0.6}


// const AppearFromBelowAnimationProps={
//   variants:{AppearFromBelow}, initial:{AppearFromBelow.start}, animate:{AppearFromBelow.finish}, transition:{transition}
// }

export function textToWordsChunksArray({text,chunkSize}:{text:string,chunkSize:number}){
  const titleArray:string[]=text.split(" ").map((e:string)=>e+" ");
  let titleArrayList=[];
  for(let i=0;i<titleArray.length;i+=chunkSize){
    titleArrayList.push(titleArray.slice(i,i+chunkSize))
  }

  return titleArrayList;
}