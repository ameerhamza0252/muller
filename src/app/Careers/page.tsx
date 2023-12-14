import CareersList, { CareersFAQ, CareersTop, IndividualsApply } from "@/components/Career/CareersPage";
import { FAQs } from "@/components/Career/SingleCareer";

export default async function Careers(){
    return(
        <>
            <CareersTop blok={2} />
            <CareersList blok={2} />
            <CareersFAQ blok={2} />
            <IndividualsApply blok={2} />
        </>
    )
}