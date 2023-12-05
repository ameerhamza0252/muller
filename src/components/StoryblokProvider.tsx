"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import { Navigation } from "./navbar";
import partners from "@/components/Home/partners";
import testimonials from "@/components/Home/testimonials";
import top from "@/components/Home/Top";
import USPList from "@/components/CommonComponents/USPList";
import Numbers from "@/components/Home/NumberList";
import Solutions from "@/views/Solutions/Solutions";
import { Card } from "./CommonComponents/Card";
import SolutionsPage from "@/views/Solutions/SolutionsPage";
import video from "./video";
import ServicesPage from "@/views/ServicesPage";
import STop from "./CommonComponents/stop";
import Benefits from "./CommonComponents/benefits";
import Services from "./Services/Services";
import Info from "./CommonComponents/info";
import Contact from "./CommonComponents/contact";
import Home from "../views/Home";
/** 3. Initialize it as usual */
storyblokInit({
  accessToken: process.env.STORYBLOKTOKEN,
  use: [apiPlugin],
  components: {
    Navigation:Navigation,
    Partners:partners,
    testimonials:testimonials,
    Top:top,
    USPList:USPList,
    page:Home,
    NumbersList:Numbers,
    Solutions:Solutions,
    solution:Card,
    Service:Card, 
    SolutionsPage:SolutionsPage,
    video:video,
    servicespage:ServicesPage,
    stop:STop,
    benefits:Benefits,
    Services:Services,
    info:Info,
    contacts:Contact
  },
  apiOptions:{
    region:'eu',
    cache: {
      clear: 'auto',
      type: 'memory'
    }
  }
});

export default function StoryblokProvider({ children }:{children:any}) {
  return children;
}