import React from "react";
import loadable from '@loadable/component'
const Layout = loadable(() => import ("../components/layout"))
/*import Layout from "@/components/layout";*/
import PageBanner from "@/components/page-banner";
import AboutOne from "@/components/about-one";
import CallToActionOne from "@/components/call-to-action-one";
import TeamCarousel from "@/components/team-carousel";
import VideoOne from "@/components/video-one";
import SubscribeForm from "@/components/subscribe-form";
import TestimonialsOneCarousel from "@/components/testimonials-carousel";
import FeatureTabOne from "@/components/feature-tab-1";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import Footer from "@/components/footer";
import { graphql, StaticQuery } from 'gatsby'

const AboutPage = () => {
  return (
   <MenuContextProvider>
     <SearchContextProvider>
       <Layout PageTitle="About Us Page">
         <HeaderOne />
         <PageBanner title="About Us" name="About" />
         <AboutOne />
         
         <section className="commonSection">
           <div className="container mission-statement">
             <h2>Mission Statement</h2>
             <p className="lead">Our goal is to provide fun fishing adventures for our customers. We emphasize safety, comfort, and an enjoyable fishing experience. Our customers can expect a punctual, fully equipped, professionally guided experience. We are in constant pursuit of the perfect environment for catching fish. Enjoying the outdoors with friends and family is a natural part of the experience The Trinity Guide Co. provides.</p>
           </div>
         </section>
         
         
         <TestimonialsOneCarousel />
         <SubscribeForm />
         <TeamCarousel />
         <VideoOne />
         <FeatureTabOne />
         <CallToActionOne extraClassName="ready" />
         <Footer />
       </Layout>
     </SearchContextProvider>
   </MenuContextProvider>
  );
};

export default AboutPage;
