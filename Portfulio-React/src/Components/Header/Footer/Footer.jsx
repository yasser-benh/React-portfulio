import footerLogo from '../../../../imgs/logoFooter.png'
import { useTranslation } from "react-i18next";
import { useLocaleStorage } from '../../hooks/useLocaleStorege';
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Select } from 'antd';

import './Footer.css'
import { changeLanguage } from 'i18next';

export default function Footer () {
        const {i18n} = useTranslation()

        const handleLanguageChange = (value)=> {
            i18n.changeLanguage(value)
            setLanguage(value)
        }

        const [language , setLanguage] =useLocaleStorage("lang" , "en")



    return(<>
        <footer className="footer-main-container">
            <div className='footer-logo'>
                <img src={footerLogo}/>
                <p>© Copyright 2023. All Rights Reserved.</p>
                </div>

                <div className='footer-follow'>
                <Select
                        defaultValue={language}
                        style={{ width: 120 }}
                       onChange={handleLanguageChange}
                        options={[
                            { value: 'en', label: 'English' },
                            { value: 'fr', label: 'Franch' },
                            
                        ]}
                        />
                    <p>FOLLOW US:</p>
                    <a href='#'><FaFacebook/></a>
                    <a href='#'><BsTwitterX/></a>
                    <a href='#'><FaLinkedin/></a>
                    <a href='#'><SiGmail/></a>

                </div>
        </footer>
    </>)
}