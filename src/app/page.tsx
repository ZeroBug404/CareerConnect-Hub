"use client"

import Footer from "@/components/ui/Footer";
import HelpCenter from "@/components/ui/HelpCenter";
import HomeBlog from "@/components/ui/HomeBlog";
import HomePageBanner from "@/components/ui/HomePageBanner";
import NavBar from "@/components/ui/NavBar";
import Overview from "@/components/ui/Overview";
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';

// eslint-disable-next-line @next/next/no-async-client-component
const HomePage = async () => {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <main>
      <NavBar />
      <HomePageBanner></HomePageBanner>
      <Overview></Overview>
      <HomeBlog></HomeBlog>
      <HelpCenter />
      <Footer />
    </main>
  );
};
export default HomePage;
