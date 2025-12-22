import { TechStackMarquee } from "@/Components/TechStack";
import { ScrollProgress } from "@/Components/magicui/scroll-progress";
import { Projectcard } from "@/Components/ProjectCard";
import { EducationCard } from "@/Components/Education";
import { Contact } from "@/Components/Contact";
import { Experience } from "@/Components/Experience";
import BottomDock from "@/Components/BottomDock";
import TopArrow from "@/Components/TopArrow";
import GithubCard from "@/Components/GithubCard";
import HeroSection from "@/Components/HeroSection";
import Profile from "@/Components/Profile";
import About from "@/Components/About";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import OnekoCat from "@/Components/OnekoCat";

const Home = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 items-stretch bg-white dark:bg-neutral-900 min-h-screen ">
      <div className="hidden lg:block ">
        <div className="h-full w-full bg-white dark:bg-neutral-950 relative">
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f8 2px, #f3f4f6 4px)",
            }}
          />

          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 2px, #171717 2px, #18181b 4px)",
            }}
          />
        </div>
      </div>

      <div className="col-span-1 lg:col-span-2 selection:bg-orange-300 dark:selection:bg-indigo-500">
        <div className="flex flex-col items-center min-h-screen relative overflow-hidden">
          <Navbar />
          <ScrollProgress className="fixed left-0 w-full h-[5px] transition-all duration-300" />
          <HeroSection />
          <Profile />
          <About />
          <TechStackMarquee />
          <GithubCard />
          <Projectcard />
          <Experience />
          <EducationCard />
          <Contact />
          <Footer />
          <BottomDock />
          <TopArrow />
          <OnekoCat />
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="h-full w-full bg-white dark:bg-neutral-950 relative">
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f8 2px, #f3f4f6 4px)",
            }}
          />

          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 2px, #171717 2px, #18181b 4px)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
