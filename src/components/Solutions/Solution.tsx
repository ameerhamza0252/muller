import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";
import Pagelink from "../link";
import Link from "next/link";
//{image,heading,text,link}:{image:string,heading:string,text:string,link:string}
export function Card({blok,uuid}:{blok:any,uuid:string}){
  console.log(uuid)
    return(
        <div className=' flex flex-col md:w-[450px] lg:w-[550px] xl:w-[800px] min-h-[600px] h-[936px] xl:h-auto px-[10px] gap-[20px] py-[18px] xl:py-[30px]'>
          <Image src={blok.image.filename} alt={blok.image.alt} width={520} height={358} style={{width:'100%',objectFit:'contain'}} />
          <text className=' heading2 w-[80%]'>{blok.title}</text>
          <div className="w-[90%] border-b-[1px] border-[#00918E]"/>
          <text className=' w-[90%] h-min-[165px] overflow-hidden  my-[8px]'>{blok.overview}</text>
          <Link href={`/Solutions/${uuid}`} ><Pagelink text="Click me" url={`/Solutions/${blok._uid}`} /></Link>
        </div>
    )
}