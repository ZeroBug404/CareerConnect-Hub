"use client";

import CareerServiceCoaching from "@/components/ui/CareerServices/CareerServiceCoaching";
import CareerServiceInterview from "@/components/ui/CareerServices/CareerServiceInterview";
import CareerServiceOffer from "@/components/ui/CareerServices/CareerServiceOffer";
import CareerServiceResume from "@/components/ui/CareerServices/CareerServiceResume";
import CareerServiceSkill from "@/components/ui/CareerServices/CareerServiceSkill";

const CareerServices = () => {
  return (
    <div>
      <CareerServiceSkill />
      <CareerServiceResume />
      <CareerServiceInterview />
      <CareerServiceOffer />
      <CareerServiceCoaching />
    </div>
  );
};

export default CareerServices;
