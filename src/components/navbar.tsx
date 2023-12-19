import Image from "next/image";
import Link from "next/link";
import { MobileMenue } from "./MobileMenue";

export function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const triggers=['Solutions','Services']

export async function Navigation({blok}:{blok:any}){
    //console.log(blok.socials[0].image.filename)
    //const {data}=await Storyblok.get('cdn/stories/navigation', {version:"published"});
    //const items=data.story.content.name;
    //console.log("NAVBAR")
    //console.log(blok.name[3])
    
    /**
     * <Link href={i.url.cached_url=="home"?"/":"/"+capitalizeFirstLetter(i.url.cached_url.split("/")[0])}legacyBehavior passHref >
                                
                                
                                {i.Lable}
                                
                               
                                </Link>
     * 
     */
    return(
        <>
        <div className=" absolute invisible hidden lg:visible w-full h-[70px] md:flex justify-between text-white z-20 pl-3">
            <Link href={blok.logo_link.cached_url=="home"?"/":blok.logo_link.url}><Image height={35} width={166} src={blok.logo.filename} alt={blok.logo.alt} /></Link>
            <div className="  flex justify-end items-center w-auto bg-[#00918E]  px-[20px] py-[15px] text-[21px] font-[400] rounded-bl-[8px] gap-[20px]">
            {
                blok.name.map((n:any)=>(
                    <div className="dropdown" key={n._uid}>
                        <Link href={n.link.cached_url=="home"?"/":"/"+capitalizeFirstLetter(n.link.cached_url)} className="dropbtn">{n.lable}</Link>
                        {
                            n.items.length&&n.items.length>0?(<div className="dropdown-content bg-brand p-[15px] rounded-bl-[8px] rounded-br-[8px] Text-16 ">
                            {
                                n.items.map((item:any)=>(
                                    <Link href={item.url.linktype=="story"?"/"+item.url.cached_url:"/"+capitalizeFirstLetter(n.link.cached_url.split("/")[0])+item.url.url} className=" py-[8px] border-b " key={item._uid}>{item.Lable}</Link>
                                ))
                            }
                        </div>):null
                        }
                    </div>
                ))
            }
            {
                blok.socials.map((social:any)=>(
                    <Link href={social.url.url} target="_blank"><Image src={social.image.filename} alt={social.image.alt} width={24} height={24} key={social._uid} /></Link>
                ))
            }
                
            </div>
        </div>
        <MobileMenue blok={blok} />
        </>
    )
}


/*
<div class="navbar">
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <div class="dropdown">
    <button class="dropbtn">Dropdown
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
</div>
*/