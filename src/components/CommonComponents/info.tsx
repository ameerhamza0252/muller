import { render } from "storyblok-rich-text-react-renderer";

export default function Info({blok}:{blok:any}){
    console.log(blok)
    return(
        <div className=" min-h-screen flex flex-col gap-5 p-10 justify-center items-center text-black">
         <text className=" heading1">{blok.title}</text>
         <text>{render(blok.description)}</text>
      </div>
    )
}