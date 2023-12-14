export default function video({blok}:{blok:any}){
    console.log("VIDEOOOOOOOOOOOOOOOOOOOOOOOOOOO")
    return(
        <div className=" h-screen bg-cover " style={{backgroundImage:`url(${blok.video.filename})`}}>
        </div>
    )
}