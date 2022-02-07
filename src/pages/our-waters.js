import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
//import ServiceOne from "@/components/service-one";
//import ServiceTwo from "@/components/service-two";
import ServiceThree from "@/components/service-three";
//import FunfactOne from "@/components/funfact-one";
//import TrustedClient from "@/components/trusted-client";
//import ClientCarouselOne from "@/components/client-carousel-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";
import ContactUs from "@/components/contact-test";

const ServicePage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Our Waters">
          <HeaderOne />
          <PageBanner title="Our Waters" name="Our Waters" />
          {/*<ServiceOne/>*/}
          {/*<ServiceTwo/>*/}
          <ServiceThree/>
          {/*<FunfactOne/>*/}
          <ContactUs />
          {/*<TrustedClient extraClassName="pb_120" />*/}
          {/*<ClientCarouselOne/>*/}
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ServicePage;
