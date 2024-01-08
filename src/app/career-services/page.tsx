"use client";

import CareerServiceCoaching from "@/components/ui/CareerServices/CareerServiceCoaching";
import CareerServiceInterview from "@/components/ui/CareerServices/CareerServiceInterview";
import CareerServiceOffer from "@/components/ui/CareerServices/CareerServiceOffer";
import CareerServiceResume from "@/components/ui/CareerServices/CareerServiceResume";
import CareerServiceSkill from "@/components/ui/CareerServices/CareerServiceSkill";
import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";

const CareerServices = () => {
  return (
    <div>
      <NavBar />
      <CareerServiceSkill />
      <CareerServiceResume />
      <CareerServiceInterview />
      <CareerServiceOffer />
      <CareerServiceCoaching />
      <Footer />
    </div>
  );
};

export default CareerServices;
