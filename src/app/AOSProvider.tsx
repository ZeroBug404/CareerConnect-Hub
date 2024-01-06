"use client";
import { initAOS } from "@/redux/api/aosInit";
import { useEffect } from "react";

interface AOSProviderProps {
  children: React.ReactNode;
}

declare global {
  interface Window {
    __next_router?: any;
  }
}

export const AOSProvider: React.FC<AOSProviderProps> = ({ children }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      initAOS();
      const handleRouteChange = () => initAOS();

      const removeRouteChangeListener: any = (
        window as any
      ).__next_router?.events.on("routeChangeComplete", handleRouteChange);

      return () => {
        removeRouteChangeListener?.();
      };
    }
  }, []);

  return <>{children}</>;
};
