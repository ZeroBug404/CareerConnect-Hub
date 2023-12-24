import HelpCenter from "@/components/ui/HelpCenter";
import HomeBlog from "@/components/ui/HomeBlog";
import HomePageBanner from "@/components/ui/HomePageBanner";
import Overview from "@/components/ui/Overview";
import JobListMain from "@/components/ui/JobListMain";

const HomePage = async () => {
  return (
    <main>
      <HomePageBanner></HomePageBanner>
      {/* <JobListMain /> */}
      <JobFeed />
      <Overview></Overview>
      <HomeBlog></HomeBlog>
      <HelpCenter />
    </main>
  );
};
export default HomePage;
