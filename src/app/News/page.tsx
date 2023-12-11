import Blog from "@/components/News/Blog";
import NewsTop from "@/components/News/N-Top";
import NewsSection from "@/components/News/News";
import OptIn from "@/components/News/OptIn";

export default async function NewsPage() {
    return(
        <>
            <NewsTop blok={2} />
            <Blog blok={2} />
            <NewsSection blok={2} />
            <OptIn blok={2} />
        </>
    )
}