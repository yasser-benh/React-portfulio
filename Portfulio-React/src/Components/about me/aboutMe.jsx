import Buttons from "../Buttons/Buttons";
import yasser from "../../../imgs/yasser.png";
import "./aboutMe.css";
import { useState } from "react";
import PrograssBar from "../prograss-bar/prograss-bar";

export default function AboutMe() {
  const linksAboutMeArr = [
    {
      id: 1,

      name: "Main Skills",
    },
    {
      id: 2,

      name: "Awards",
    },
    {
      id: 3,

      name: "Education",
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
          <img src={yasser} className="about-me-image" />
        </div>

        <div className="about-me-description">
          <h4>ABOUT ME</h4>
          <h1>
            <span>1 Year Experience</span> On Front-end Developeur
          </h1>
          <p>
            Hello there! I'm <b>Ben hassene Yasser</b>. I specialize in web
            development, and I'm deeply passionate and committed to my craft.
            With 1 Year of experince as a Front-End developeur
          </p>

          <div className="about-me-links">
            {linksAboutMeArr.map((aboutme,index) => (
              <Buttons
                contant={aboutme.name}
                key={aboutme.id}
                classname={index === activeBtn ? "btn-selected-active" : "btn-unselected"}
                onclick={() => buttonsSelected(index)}
              />
            ))}
        </div>

        <div className="prograss-bar-container">
                <h3>HTML/CSS</h3>
                <PrograssBar classname='prograss-bar-fill-1'/>
                <h3>JavaScript</h3>
                <PrograssBar classname='prograss-bar-fill-2'/>
                <h3>ReactJS</h3>
                <PrograssBar classname='prograss-bar-fill-3'/>
    
            </div>
        </div>
      </div>
    </>
  );
}
