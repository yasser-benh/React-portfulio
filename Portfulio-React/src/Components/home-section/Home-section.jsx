import yasser from '../../../imgs/yasser.png'
import Buttons from "../Buttons/Buttons";
import { HiOutlineDownload } from "react-icons/hi";

import './home-section.css'

export default function Home () { 
    return (<>
        <div className="home-container">
            <div className="home-description">
                <h4>Welcome to my Portfolio</h4>
                <h1>Hi I'm <br></br><span>Ben Hassene Yasser</span> Front-End Developeur</h1>
                <p>Collaboration with highly skilled individuals, our agency delivers top-quality services</p>

                    <div className="home-desctiption-buttons">
                        <Buttons classname='btn-standerd' contant='Hire Me!'/>
                        <Buttons classname='btn-hover-eff' contant='Download CV' icone ={<HiOutlineDownload className='download-icone'/>}/>
                    </div>
            </div>
            <div className="home-img-container">
                <img src={yasser} className='home-image'/>
            </div>

        </div>
    </>)
}