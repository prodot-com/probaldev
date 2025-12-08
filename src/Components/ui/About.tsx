import { Tooltip } from "../aceternity/tooltip-card"

const About = () => {
  return (
          <div className="w-full pr-17 max-w-5xl px-4 lg:ml-12 mt-9 z-0">
            <div className="flex">
              <p className=" text-[27px] md:text-[28px] text-black dark:text-white instrument-serif-bold">
                About.
              </p>
            </div>

            <div className="instrument-serif  text-black text-[17px] md:text-[20px] dark:text-neutral-400">
            Hey, I’m Probal—a developer from Kolkata who loves building things on the internet. I spend most of my time experimenting with code, learning new tech, and turning random ideas into projects.
I enjoy working on practical stuff that solves real problems, but I also love hacking together silly apps just for fun.
Open to freelance, collabs, or anything exciting. If you’ve got an idea worth exploring,{" "}
              <Tooltip
              containerClassName="instrument-serif-italic-bold"
              content="Leave a message below"
              >
              <span className="font-bold dark:text-neutral-200 instrument-serif-bold cursor-pointer hover:underline">
                let's connect.
              </span>
              </Tooltip>
              
            </div>
          </div>
  )
}

export default About
