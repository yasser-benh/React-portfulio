import { Link } from "react-router-dom";
import Buttons from "../Buttons/Buttons";
import logo from "../../assets/logo.gif";
import "./Header.css";
import { useState } from "react";
import '../Buttons/buttons.css'
export default function Header() {
  const [isActive, setIsActive] = useState(0);

  const activeItem = (index) => {
    setIsActive(index === isActive ? null : index);
  };

  const linkArr = [
    {
      id: 1,
      to: "/Home",
      name: "Home",
    },
    {
      id: 2,
      to: "/About-me",
      name: "About Me",
    },
    {
      id: 3, 
      to: "/Services",
      name: "Services",
    },
    {
      id: 4,
      to: "/Blog",
      name: "Blog",
    },
    {
      id: 5,  
      to: "/Contact-me",
      name: "Contact Me",
    },
  ];

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} className="logo" />
        </div>
        <div className="navbar-links">
          {linkArr.map((links, index) => (
            <Link
              to={links.to}
              className={index === isActive ? "links-active" : "links"}
              onClick={()=>activeItem(index)} key={links.id}
            >
              {links.name}
            </Link>
          ))}
        </div>

        <div className="navbar-button">
          <Buttons classname='btn-standerd' contant="Let's Chat"/>
        </div>
      </div>
    </>
  );
}
