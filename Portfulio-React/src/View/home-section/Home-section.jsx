

import { HiOutlineDownload } from "react-icons/hi";
import './home-section.css'
import Buttons from "../../Components/Buttons/Buttons";


export default function Home () { 
    return (<>
        <div className="home-container">
            <div className="home-description">
                <h4>Welcome to my Portfolio</h4>
                <h1>Hi I'm <br></br><span>Robert Junior</span> Product Designer</h1>
                <p>Collaboration with highly skilled individuals, our agency delivers top-quality services</p>

                    <div className="home-desctiption-buttons">
                        <Buttons classname='btn-standerd' contant='Hire Me!'/>
                        <Buttons classname='btn-hover-eff' contant='Download CV' icone ={<HiOutlineDownload className='download-icone'/>}/>
                    </div>
            </div>
            <div className="home-img-container">
                <img src="https://s3-alpha-sig.figma.com/img/f278/6fa0/3053ad1ea0493a8491c1badae06be98a?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NgXVZ4p4FAwusywop4jy1sTtcMCBdR2v-LBSirM5XMP8BYgE2dVbS7xpUXAd73OwAvsFXUZmwEmwSZxKw1GTtD6hnpsnQgMtwW47761RUOyWv2zFfHZpdESXVmLLOiO8ZSPaOQ4hdrn2Ob-5BnS~Xflm60t9V~32~eze07UIKPwIMExaQRD042DxF2YCcc-Xn5ed2KLfLhsd4SAhR2kRzkqPHsvR-AIoOUEzfNIJdGYX31guKmYbxus9VQJX5k0Uj7QFlHqRRzumoU7YmxYRFJopfYTVgNkjLPvHrt6CD9au~860Pf2SYQrNUiy-uF~vlHgAfoJwpBEov5IdcYMmpg__" className='home-image'/>
            </div>
            

        </div>
        
    </>)
}