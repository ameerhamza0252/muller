"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import { Navigation } from "./navbar";
import partners from "@/components/Home/partners";
import top from "@/components/Home/Top";
import USPList from "@/components/CommonComponents/USPList";
import Numbers from "@/components/Home/NumberList";
import { Card } from "./CommonComponents/Card";
import SolutionsPage from "@/views/Solutions/SolutionsPage";
import video from "./video";
import ServicesPage from "@/views/ServicesPage";
import STop from "./CommonComponents/stop";
import Benefits from "./CommonComponents/benefits";
import Info from "./CommonComponents/info";
import Contact from "./CommonComponents/contact";
import Home from "./Home/Home";
import Testimonials from "./Home/testimonials";
import AboutusStory from "@/views/About us/Aboutus";
import { AboutTop, Achievements, History, Organization, Philosophy } from "./About/About";
import SolutionsList from "@/views/Solutions/Solutions";
import ServicesList from "./Services/Services";
import MarketsView from "@/views/Markets/Markets";
import MarketTop from "./Markets/markettop";
import MarketPoints from "./Markets/marketpoints";
import Projects from "./Markets/projects";
import SignUpMarkets from "./Markets/signup";
/** 3. Initialize it as usual */
storyblokInit({
  accessToken: process.env.STORYBLOKTOKEN,
  use: [apiPlugin],
  components: {
    Navigation:Navigation,
    Partners:partners,
    testimonials:Testimonials,
    Top:top,
    USPList:USPList,
    page:Home,
    NumbersList:Numbers,
    SolutionsList:SolutionsList,
    solution:Card,
    Service:Card, 
    SolutionsPage:SolutionsPage,
    video:video,
    servicespage:ServicesPage,
    stop:STop,
    benefits:Benefits,
    ServicesList:ServicesList,
    info:Info,
    contacts:Contact,
    About:AboutusStory,
    abouttop:AboutTop,
    philosophy:Philosophy,
    history:History,
    organization:Organization,
    achievements:Achievements,
    

    //
    markets:MarketsView,
    markettop:MarketTop,
    marketpoints:MarketPoints,
    projects:Projects,
    signup:SignUpMarkets
  },
  apiOptions:{
    region:'eu',
    cache: {
      clear: 'auto',
      type: 'none',
    },
  }
});

export default function StoryblokProvider({ children }:{children:any}) {
  return children;
}