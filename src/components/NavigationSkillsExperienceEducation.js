import * as React from "react";
import { Link } from "react-router-dom";
import {
  Routes,
  Route,
} from "react-router-dom";
import Education from "../routes/Education";
import Experiences from "../routes/Experiences";
import Skills from "../routes/Skills";
import star from "../assets/start.png";


const educationData = [
  {
    boardname: "University Of Delhi",
    session: "(2018-2021)",
    title: "Computer Science",
    description:
      "I am a Developer and Teacher by choice. Whether it be Designing a Website or Teaching someone something I do it in the best way possible.",
    key: 1,
  },

  {
    boardname: "Central Board of Secondary Education",
    session: "2018",
    title: "Class XII",
    description:
      "I am a Developer and Teacher by choice. Whether it be Designing a Website or Teaching someone something I do it in the best way possible.",
    key: 2,
  },

  {
    boardname: "Central Board of Secondary Education",
    session: "2016",
    title: "Class X",
    description:
      "I am a Developer and Teacher by choice. Whether it be Designing a Website or Teaching someone something I do it in the best way possible.",
    key: 3,
  },
];


const ExperiencesData = [
  {
    companyName: 'Delhi Institute Of Computer Sciences',
    joining: '(2021-Present)',
    jobTitle: 'Computer Teacher',
    jobDesc: 'I am a Developer and Teacher by choice. Whether it be Designing a Website or Teaching someone something I do it in the best way possible.',
    key: 1
  },
]


const SkillsData = [
  {

    title: 'HTML5',
    sitare: 5,
    key: 1
  },
  {

    title: 'CSS3',
    sitare: 5,
    key: 2
  },
  {

    title: 'JAVASCRIPT',
    sitare: 5,
    key: 3
  },
  {

    title: 'JAVA',
    sitare: 5,
    key: 4
  },
  {

    title: 'PYTHON',
    sitare: 5,
    key: 5
  },
  {

    title: 'C++',
    sitare: 5,
    key: 6
  },
  {

    title: 'REACT',
    sitare: 4,
    key: 7
  },
  {

    title: 'TAILWIND CSS',
    sitare: 4,
    key: 8
  },
  {

    title: 'BOOTSTRAP',
    sitare: 4,
    key: 9
  },
]

function reviewStars(num) {
  let stars = [];
  for (let i = 0; i < num; i++) {
    stars.push(<img className="" key={i} src={star} alt="/" />);
  }
  return (
    <>{stars}</>
  );
};

export default function NavigationSkillsExperienceEducation() {

  return (
    <div id="mywork" className="py-16 ">
      <div className="flex flex-col lg:flex-row  items-center   justify-center ">
        <Link to="/education" className="set my-1 w-full mx-[2%] h-11 flex items-center justify-center p-3 rounded-md border border-zinc-600 hover:scale-95 hover:border-2 hover:bg-white transition-all ease-in-out">

          <svg
            className="w-4 mr-2  group-hover:animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M368 344h96c13.25 0 24-10.75 24-24s-10.75-24-24-24h-96c-13.25 0-24 10.75-24 24S354.8 344 368 344zM208 320c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 291.3 172.7 320 208 320zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16h-192c0-44.18-35.82-80-80-80h-64C131.8 352 96 387.8 96 432H64c-8.822 0-16-7.178-16-16V160h480V416zM368 264h96c13.25 0 24-10.75 24-24s-10.75-24-24-24h-96c-13.25 0-24 10.75-24 24S354.8 264 368 264z" />
          </svg>
          <h1
            className="
          text-lg
          md:text-xl
          tracking-wider
          font-bold 
          my-14 
          md:my-12 
          text-[#1A1914]
  
          "
          >
            Education
          </h1>

        </Link>

        <hr className="w-full hidden lg:block border-none outline-none h-[2px] bg-black" />


        <Link to="/experiences" className="set my-1 w-full mx-[2%] h-11 flex items-center justify-center p-3 rounded-md border border-zinc-600 hover:scale-95 hover:border-2 hover:bg-white transition-all ease-in-out">

          <svg
            className="w-4  mr-2 group-hover:animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M368 344h96c13.25 0 24-10.75 24-24s-10.75-24-24-24h-96c-13.25 0-24 10.75-24 24S354.8 344 368 344zM208 320c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 291.3 172.7 320 208 320zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16h-192c0-44.18-35.82-80-80-80h-64C131.8 352 96 387.8 96 432H64c-8.822 0-16-7.178-16-16V160h480V416zM368 264h96c13.25 0 24-10.75 24-24s-10.75-24-24-24h-96c-13.25 0-24 10.75-24 24S354.8 264 368 264z" />
          </svg>
          <h1
            className="
            text-lg
            md:text-xl
            tracking-wider
            font-bold 
            my-14 
            md:my-12 
            text-[#1A1914]
            "
          >
            Experiences
          </h1>

        </Link>
        <hr className="w-full hidden lg:block border-none outline-none h-[2px] bg-black" />


        <Link to="/skills" className="set my-1 w-full mx-[2%] h-11 flex items-center justify-center p-3 rounded-md border border-zinc-600 hover:scale-95 hover:border-2 hover:bg-white transition-all ease-in-out">

          <svg
            className="w-4 mr-2  group-hover:animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M368 344h96c13.25 0 24-10.75 24-24s-10.75-24-24-24h-96c-13.25 0-24 10.75-24 24S354.8 344 368 344zM208 320c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 291.3 172.7 320 208 320zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16h-192c0-44.18-35.82-80-80-80h-64C131.8 352 96 387.8 96 432H64c-8.822 0-16-7.178-16-16V160h480V416zM368 264h96c13.25 0 24-10.75 24-24s-10.75-24-24-24h-96c-13.25 0-24 10.75-24 24S354.8 264 368 264z" />
          </svg>
          <h1
            className="
    text-lg
    md:text-xl
    tracking-wider
    font-bold 
    my-14 
    md:my-12 
    text-[#1A1914]
   "
          >
            Skills
          </h1>

        </Link>

      </div>
      <Routes>

        <Route path="education" element={<div className="EducationComponent">
          {educationData.map((data) => (
            <Education
              key={data.key}
              boardname={data.boardname}
              session={data.session}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>} />

        <Route path="experiences" element={<div className="ExperiencesComponent">
          {ExperiencesData.map((data) => (
            <Experiences
              key={data.key}
              boardname={data.companyName}
              session={data.joining}
              title={data.jobTitle}
              description={data.jobDesc}
            />
          ))}
        </div>} />

        <Route path="skills" element={<div className="SkillsComponent">
          {SkillsData.map((data) => (
            <Skills
              key={data.key}
              title={data.title}
              description={data.jobDesc}
            >
              {reviewStars(data.sitare)}
            </Skills>
          ))}
        </div>} />

      </Routes>

    </div>
  );
}
