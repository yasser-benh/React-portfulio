import { NavLink } from "react-router-dom";
import Buttons from "../Buttons/Buttons";
import logo from '../../../imgs/logo.png'
import "./Header.css";
import '../Buttons/buttons.css'
import { useTranslation } from "react-i18next";
import Footer from "./Footer/Footer";
export default function Header() {

  const [t] = useTranslation()

  

  const linkArr = [
    {
    
      to: "/Home",
      name: "Home",
    },
    {
      
      to: "/AboutMe",
      name: "AboutMe",
    },
    {
      
      to: "/Services",
      name: "Services",
    },
    {
      
      to: "/Blog",
      name: "Blog",
    },
    {
     
      to: "/ContactMe",
      name: "ContactMe",
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
            <NavLink
              to={links.to}
              className={({ isActive }) =>
                isActive ? "links-active" : "links"
              }
              key={index}
              
            >
              {t(links.name)}
            </NavLink>
          ))}
        </div>

        <div className="navbar-button">
          <Buttons classname='btn-standerd' contant={t("chat")}/>
        </div>
      </div>
    </>
  );
}
