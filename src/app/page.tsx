"use client"

import HelpCenter from "@/components/ui/HelpCenter";
import HomeBlog from "@/components/ui/HomeBlog";
import HomePageBanner from "@/components/ui/HomePageBanner";
import Overview from "@/components/ui/Overview";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import 'aos/dist/aos.css'; // Import the AOS styles
import AOS from 'aos';
import { useEffect } from "react";

// eslint-disable-next-line @next/next/no-async-client-component
const HomePage = async () => {
  useEffect(() => {
    AOS.init();
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
