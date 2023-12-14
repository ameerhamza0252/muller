import { CareerDescription, CareerTop, FAQs, GetInTouch } from "@/components/Career/SingleCareer";

export default async function CareerPost() {
    return(
        <>
            
            <CareerTop blok={2} />
            <CareerDescription blok={2} />
            
            <GetInTouch />
            <FAQs blok={2} />
        </>
    )
}


