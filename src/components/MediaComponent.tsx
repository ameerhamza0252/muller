"use client"
import Image from 'next/image';
import { Suspense } from 'react';
import Loading from './About/loading';

import dynamic from 'next/dynamic';

// Dynamic import of react-player
const ReactPlayer = dynamic(
  () => import('react-player'),
  {
    // Loading component
    loading: () => <div className=' bg-black w-full h-full text-white' style={{position:'inherit'}}>Fetching for you ....</div>,
    ssr: false
  }
)

function MediaRenderer({url,type,width,height,alt="",muted=true}:{url:string,type:string,width?:number,height?:number, alt:string,muted?:boolean}) {
    
    if(type=='video'){
    return <Suspense fallback={<div className=' bg-B-Yellow w-full h-full text-white' style={{position:'inherit'}}>Fetching for you ....</div>}><ReactPlayer controls={false} muted={muted} loop playing={true}  style={{position:'inherit'}} width={width?width:'100%'} height={height?height:'100%'} url={url} /></Suspense>
    }else if(type=='image'){
        return <Suspense fallback={<div></div>}><Image src={url} alt={alt} fill /></Suspense>
    }else if(type=='audio'){
        <ReactPlayer width={width} height={height} url={url} />
    }
    
}

export default MediaRenderer;
