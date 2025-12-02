import pro2 from "../../assets/DP4.jpg";
import hero1 from "../../assets/hero1.jpg";
import {Copyright} from "lucide-react";
import {TechStackMarquee } from "@/Components/ui/TechStack";
import { ScrollProgress } from "@/Components/magicui/scroll-progress";
import { Projectcard } from "@/Components/ui/ProjectCard";
import { EducationCard } from "@/Components/ui/Education";
import { Contact } from "@/Components/ui/Contact";
import { Experience } from "@/Components/ui/Experience";
import { useNavigate } from "react-router-dom";
import BottomDock from "@/Components/ui/BottomDock";
import TopArrow from "@/Components/ui/TopArrow";
import GithubCard from "@/Components/ui/GithubCard";
import { Tooltip } from "@/Components/aceternity/tooltip-card";


const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 items-stretch bg-white dark:bg-neutral-900 min-h-screen ">
      <div className="hidden lg:block ">
        <div className="h-full w-full bg-white dark:bg-neutral-950 relative">
          <div
          className="absolute inset-0 z-0 block dark:hidden"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f8 2px, #f3f4f6 4px)",
          }}
          />
  
          <div
          className="absolute inset-0 z-0 hidden dark:block"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2px, #171717 2px, #18181b 4px)",
          }}
          />
  
        </div>

      </div> 


      <div className="col-span-1 lg:col-span-2 selection:bg-orange-300 dark:selection:bg-indigo-500">
        <div className="flex flex-col items-center min-h-screen relative overflow-hidden">
          <div className="fixed top-0 left-0 w-full h-[70px] bg-white dark:bg-black shadow z-30 flex items-center justify-center">
            {/* <div className="hidden md:block absolute bottom-0 top-0 left-0 w-[400px] bg-gradient-to-r from-indigo-600 dark:from-neutral-900 to-transparent"></div> */}
            <div className="w-full max-w-3xl h-full px-2">
              <div className="h-full w-full flex justify-between items-center">
                <h1
                onClick={()=>navigate(0)}
                className="cursor-pointer kablammo-font hover:underline decoration-indigo-700 text-[35px] text-indigo-700 tracking-tight transition delay-25">
                  probal
                </h1>
              </div>
            </div>
            {/* <div className="hidden md:block absolute bottom-0 top-0 right-0 w-[400px] bg-gradient-to-r from-transparent dark:from-neutral-900 to-indigo-700"></div> */}
          </div>

          <ScrollProgress className="fixed left-0 w-full h-[5px] transition-all duration-300" />

          <div className="relative w-full max-w-5xl mt-[70px] overflow-hidden">
            <img
              src={hero1}
              alt="Hero Background"
              className="w-full h-[250px] md:h-[380px] object-cover"
            />

            <div className="absolute top-0 left-0 right-0 h-[80px] bg-gradient-to-b from-white dark:from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-t from-white dark:from-neutral-900 to-transparent"></div>
            <div className="absolute bottom-0 top-0 left-0 w-[70px] bg-gradient-to-r from-white dark:from-neutral-900 to-transparent"></div>
            <div className="absolute bottom-0 top-0 right-0 w-[70px] bg-gradient-to-l from-white dark:from-neutral-900 to-transparent"></div>

            <div className="absolute underline decoration-indigo-500 dark:decoration-indigo-700 inset-0 flex items-center font-bold justify-center text-white dark:text-black  italic 
            text-[27px] md:text-[35px] instrument-serif-bold tracking-wide">
              Build anything<span className="text-indigo-500 dark:text-indigo-700">.</span>
            </div>
          </div>

          <div className=" w-full max-w-5xl mt-[-56px] md:mt-[-72px] px-4 lg:ml-12 z-20">
            <img
              src={pro2}
              alt="Profile"
              className="w-41 h-41 md:w-42 md:h-42 rounded-full ring-4 ring-black/55 dark:ring-white/30 hover:ring-black/40 dark:hover:ring-white/20 transition-all delay-50 shadow-2xl shadow-black/75 dark:shadow-white/15 mb-4 object-cover md:ml-2"
            />
            <div className="">
              <div className="w-full md:max-h-13 md:w-auto flex justify-between mr-12">
                  <h2 className="instrument-serif-bold text-black dark:text-white text-[45px] md:text-[45px] ">
                Probal Ghosh
              </h2>
            </div>
              
              <p className="instrument-serif-italic dark:text-neutral-500 text-neutral-800 text-[22px] md:text-[22px]">
                22 • engineer • fullstack developer
              </p>
            </div>
          </div>

          <div className="w-full pr-17 max-w-5xl px-4 lg:ml-12 mt-9 z-0">
            <div className="flex">
              <p className=" text-[27px] md:text-[28px] text-black dark:text-white instrument-serif-bold">
                About
              </p>
            </div>

            <p className="instrument-serif  text-black text-[17px] md:text-[20px] dark:text-neutral-400">
              Hello! I'm a developer from Kolkata, India. I enjoy programming and
              exploring technology. Currently working on my own projects.{" "}
              <Tooltip
              containerClassName="instrument-serif-italic-bold"
              content="Leave me a message"
              >
              <span className="font-bold dark:text-neutral-200 instrument-serif-bold cursor-pointer hover:underline">
                Open to work
              </span>
              </Tooltip>
              , freelance, or collaborate.
            </p>
          </div>

          <TechStackMarquee/>

          <GithubCard/>

          <div className=" px-0 md:px-2 mt-9 font-bold w-full max-w-5xl">
            {/* <p className="pl-4 md:pl-8 instrument-serif-bold text-[27px] md:text-[27px]">Featured Projects</p> */}
                  <Projectcard />
          </div>

          <div className=" px-2 pl-3 md:pl-11 mt-3 font-bold w-full max-w-5xl">
          <Experience/>
          </div>

          <div className=" px-2 pl-3 md:pl-11 mt-1 font-bold w-full max-w-5xl">
          <EducationCard/>
          </div>

          <div className="  heading-font sm:pr-17 px-4 lg:ml-14 mt-2 sm:mt-1 z-0 w-full max-w-5xl  border-neutral-500 dark:border-neutral-600 pt-4">
            <Contact/>
          </div>

          <div className=" mt-7 pt-5 pl-4 md:px-9 border-t-1 dark:border-neutral-700 flex flex-col gap-3 w-full max-w-5xl min-h-[170px]">
            <p className="pl-2 flex items-center gap-1 hanken-grotesk-font">
              <Copyright className="w-5 sm:w-5"/> 
              <span className="instrument-serif-bold text-[19px] sm:text-[19px]">2025 Probal Ghosh. All rights reserved.</span>
            </p>
          </div>

          <BottomDock/>
          <TopArrow/>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="h-full w-full bg-white dark:bg-neutral-950 relative">
  <div
    className="absolute inset-0 z-0 block dark:hidden"
    style={{
      backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f8 2px, #f3f4f6 4px)",
    }}
  />
  
  <div
    className="absolute inset-0 z-0 hidden dark:block"
    style={{
      backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2px, #171717 2px, #18181b 4px)",
    }}
  />
  
</div>

      </div>
    </div>
  );
};

export default Home; 