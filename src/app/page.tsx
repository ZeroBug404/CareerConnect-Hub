import HelpCenter from "@/components/ui/HelpCenter";

import HomeBlog from "@/components/ui/HomeBlog";
import HomePageBanner from "@/components/ui/HomePageBanner";
import Overview from "@/components/ui/Overview";

export default function Home() {
  return (
    <main>
      {/* <Navbar></Navbar> */}
      <HomePageBanner></HomePageBanner>
      <Overview></Overview>
      <HomeBlog></HomeBlog>
      <HelpCenter />
    </main>
  );
}