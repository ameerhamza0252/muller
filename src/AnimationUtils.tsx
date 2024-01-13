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


export function AnimateFromBelowComponent({children,className}:{children:JSX.Element,className:string}){
  return(
    <motion.div className={className} variants={AppearFromBelow} initial={AppearFromBelow.start} animate={AppearFromBelow.finish} transition={transition}>
      {children}
    </motion.div>
  )
}


export function AnimateFromLeftComponent({ children,className}:{children:JSX.Element,className:string}){
  return(
    <motion.div className={className} variants={ImageFromLeft} initial={ImageFromLeft.start} animate={ImageFromLeft.finish} transition={transition}>
      {children}
    </motion.div>
  )
}

export function AnimateFromRightComponent({ children,className}:{children:JSX.Element,className:string}){
  return(
    <motion.div className={className} variants={ImageFromRight} initial={ImageFromRight.start} animate={ImageFromRight.finish} transition={transition}>
      {children}
    </motion.div>
  )
}

export function AnimateFromFarRightComponent({ children,className}:{children:JSX.Element,className:string}) {
  return(
    <motion.div className={className} variants={ImageFromRightFar} initial={ImageFromRightFar.start} animate={ImageFromRightFar.finish} transition={transition}>
      {children}
    </motion.div>
  )
}

export function AnimateFromAboveComponent({children,className}:{children:JSX.Element,className:string}){
  return(
    <motion.div className={className} variants={AppearFromAbove} initial={AppearFromAbove.start} animate={AppearFromAbove.finish} transition={transition}>
      {children}
    </motion.div>
  )
}

export function AnimateYAxisComponent({children,Y,className}:{children:JSX.Element,Y:number,className:string}){
  return(
    <motion.div className={className} variants={{start:{y:Y,opacity:0},finish:{y:0,opacity:1}}} initial="start" animate="finish" transition={transition}>
      {children}
    </motion.div>
  )
}

export function AnimateXAxisComponent({children,X,className}:{children:JSX.Element,X:number,className:string}){
  return(
    <motion.div className={className} variants={{start:{x:X,opacity:0},finish:{x:0,opacity:1}}} initial="start" animate="finish" transition={transition}>
      {children}
    </motion.div>
  )
}