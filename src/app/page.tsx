import Footer from "@/components/ui/Footer";
import HelpCenter from "@/components/ui/HelpCenter";
import HomeBlog from "@/components/ui/HomeBlog";
import HomePageBanner from "@/components/ui/HomePageBanner";
import NavBar from "@/components/ui/NavBar";
import Overview from "@/components/ui/Overview";

const HomePage = async () => {
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
