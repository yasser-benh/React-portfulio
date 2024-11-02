import Buttons from "../../Buttons/Buttons";
import yasser from "../../../../imgs/yasser.png";
import "./aboutMe.css";
import { useState } from "react";
import PrograssBar from "./prograss-bar/prograss-bar";

export default function AboutMe() {
  const linksAboutMeArr = [
    {
      id: 1,
      to: "/main-skill",
      name: "Main Skills",
    },
    {
      id: 2,
      to: "/awards",
      name: "Awards",
    },
    {
      id: 3,
      to: "/education",
      name: "Education",
    },
  ];

  const aboutDetails = [
    {
      id: 0,
      title: "HTML/CSS",
      bar: <PrograssBar classname="prograss-bar-fill-1" />,
      type: "mainSkill",
    },
    {
      id: 0,
      title: "JavaScript",
      bar: <PrograssBar classname="prograss-bar-fill-2" />,
      type: "mainSkill",
    },
    {
      id: 0,
      title: "ReactJs",
      bar: <PrograssBar classname="prograss-bar-fill-3" />,
      type: "mainSkill",
    },

    {
      id: 1,
      title: "java",
      bar: <PrograssBar classname="prograss-bar-fill-3" />,
      type: "awards",
    },
    {
      id: 1,
      title: "python",
      bar: <PrograssBar classname="prograss-bar-fill-1" />,
      type: "awards",
    },
    {
      id: 1,
      title: "c++",
      bar: <PrograssBar classname="prograss-bar-fill-2" />,
      type: "awards",
    },
    {
      id: 2,
      title: "Btp Maintiennce industruel",
      duree: "Duration:  2014 - 2016",
      type: "education",
    },
    {
      id: 2,
      title: "BTS Maintuience industuels [automatisme]",
      duree: "Duration:  2016 - 2019",
      type: "education",
    },
    {
      id: 2,
      title: "Front-end developer",
      duree: " Duration: 2023 - 2024",
      type: "education",
    },
  ];
  const [activeBtn, setActiveBtn] = useState(0);

  const buttonsSelected = (index) => {
    setActiveBtn(index === activeBtn ? null : index);
  };

  return (
    <>
      <div className="about-me-container">
        <div className="about-me-img-container">
          <img
            src="https://s3-alpha-sig.figma.com/img/a8ad/71d6/9e7a43d2d17457c0f66ad473ad940210?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZdTQSUZNtArEk78GMLiqbRH58837flDnps2myBaYLzI0kV3KPhMD9NLGq0O5Qjo3m9uwr5c-PvafqJ0Req9MyZ8MBZQOpCMh5QLSfPvTg0B0pKSP3lJ-udsuOh3NffZEEIdMs9hXez5QWzn8ElLuMVY4oRly2vrFKCTkt9OIkEln5QvqzYd8I~RFwm~Ogb2sVhaRqY8Hv18fGz62IOAqJ2IiQTNcgcQa7mE~vwrtGVW-eBmhH5O30rV7gUvqOKttu9MKIm6Q5dECGKFJPFYDnkYvPxrxZ-CUvUeB1DcGrLb1os1cbRA2V6kLU-h7FyNOFP0ygwZAnZ5fQsx3RaqyLA__"
            className="about-me-image"
          />
        </div>

        <div className="about-me-description">
          <h4>ABOUT ME</h4>
          <h1>
            <span>20 Year’s Experience</span> on Product Design
          </h1>
          <p>
            Hello there! I'm <b> Robert Junior</b>. I specialize in web design
            and development, and I'm deeply passionate and committed to my
            craft. With <b>20 years</b> of experience as a professional graphic
            designer
          </p>

          <div className="about-me-links">
            {linksAboutMeArr.map((aboutme, index) => (
              <Buttons
                contant={aboutme.name}
                key={aboutme.id}
                classname={
                  index === activeBtn ? "btn-selected-active" : "btn-unselected"
                }
                onclick={() => buttonsSelected(index)}
              ></Buttons>
            ))}
          </div>
          <div className="prograss-bar-container">
            {aboutDetails
              .filter((details) => details.id === activeBtn)
              .map((fdetails) => (
                <div>
                  <h3>{fdetails.title}</h3>
                  {fdetails.bar}
                  <p>{fdetails.duree}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
