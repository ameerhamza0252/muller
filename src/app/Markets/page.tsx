import MarketPoints from "@/components/Markets/marketpoints";
import MarketTop from "@/components/Markets/markettop";
import Needs from "@/components/Markets/needs";
import Projects from "@/components/Markets/projects";

export default async function Markets() {
  
    return(
        <>
            <MarketTop blok={2} />
            <MarketPoints blok={2} />
            <Projects />
            <Needs/>
        </>
    )
} 