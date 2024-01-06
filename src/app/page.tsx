<<<<<<< HEAD
"use client"

=======
import Footer from "@/components/ui/Footer";
>>>>>>> a7ed5901c1150cb6d38a6e5363f84c9404d56a83
import HelpCenter from "@/components/ui/HelpCenter";
import HomeBlog from "@/components/ui/HomeBlog";
import HomePageBanner from "@/components/ui/HomePageBanner";
import NavBar from "@/components/ui/NavBar";
<<<<<<< HEAD
import Footer from "@/components/ui/Footer";
import 'aos/dist/aos.css'; // Import the AOS styles
import AOS from 'aos';
import { useEffect } from "react";
=======
import Overview from "@/components/ui/Overview";
>>>>>>> a7ed5901c1150cb6d38a6e5363f84c9404d56a83

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
