import BMI from "@/components/bmicalculator";
import FitnessTracker from "@/components/fitnesstracker";
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Heading, Section } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <Section className=" hero__section">
        <div className="flex max-lg:flex-col  px-4 py-8 mx-auto gap-8 xl:gap-4 lg:py-16  ">
          <div className="mr-auto flex flex-col place-self-center ">
            <h1 className=" max-w-[720px] mb-10 text-5xl max-md:text-4xl xl:text-6xl  font-extrabold tracking-tight leading-none ">
              {" "}
              Track your <span className=" text-secondary-9">fitness</span>{" "}
              goals and stay motivated
            </h1>

            <div className="flex items-center max-lg:justify-center gap-2">
              <button className=" bg-secondary-8 hover:bg-secondary-9 text-white/80 p-4 rounded-full group inline-flex  items-center gap-4 ">
                Explore
                <ArrowRightIcon className=" group-hover:translate-x-1" />
              </button>
              <Link
                href="https://github.com/Suraj370/fittnesstracker"
                className=" bg-secondary-8 hover:bg-secondary-9 text-white/80 p-4 rounded-full group inline-flex  items-center gap-4"
              >
                <GitHubLogoIcon />
                Github
              </Link>
            </div>
          </div>
          <div className="mt-0 flex items-center justify-center">
            <Image
              src="/health-and-fitness.png"
              height="500"
              width="500"
              alt="health-and-fitness.png"
            ></Image>
          </div>
        </div>
      </Section>

      <Section className="bmi__calculator">
        <h1 className="heading">
          {" "}
          BMI Calculator: Body Mass Index
        </h1>
        <p>
          BMI is a measurement of the relationship between two prominent body
          metrics: your weight and height
        </p>
        <div>
          <BMI />
        </div>
      </Section>

      <Section className="fitness__tracker">
        <h1 className="heading">
          Fitness Tracker
        </h1>
        <FitnessTracker/>

      </Section>
    </main>
  );
}
