import JobFeed from "@/components/ui/jobFeed";
import HelpCenter from "@/components/ui/HelpCenter";
import HomeBlog from "@/components/ui/HomeBlog";
import HomePageBanner from "@/components/ui/HomePageBanner";
import Overview from "@/components/ui/Overview";

export default function Home() {
  return <main>
    <HomePageBanner></HomePageBanner>
    <JobFeed/>
      <Overview></Overview>
      <HomeBlog></HomeBlog>
    <HelpCenter />
  </main>;
}


