import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {Link} from 'react-router-dom'
import icone from "../../../../../imgs/front-development-1-1 1.svg"
import './swiper.css'
import 'swiper/css';


export default function SwiperSection () {

    const slider = [
        {
          id: 1,
          title: "Website / App Design UX / UI Design",
          description:
            "Creating Engaging Digital Experiences for Websites and Apps through UX/UI Design",
        },
    
        {
          id: 2,
          title: "Strategic Marketingand Creative Content",
          description:
            "Elevating Brands and Engagement through Strategic Marketing and Creative Content",
        },
    
        {
          id: 3,
          title: "Multivendor eCommerce Website Solutions",
          description: "Unlocking the World of Multivendor eCommerce Websites",
        },
    
        {
          id: 4,
          title: "Crafting Brand Strategies and Artistic Direction",
          description:
            "Delving Deep into Crafting Comprehensive Brand Strategies and Offering Expert Guidance",
        },
      ];

  return (
      

    <Swiper
      modules={[Navigation]}   
      spaceBetween={50}
      slidesPerView={3}
      navigation={{
        nextEl:'',
        prevEl:''
      }}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      
    
    >
      
        {
            slider.map((slider)=> (<SwiperSlide key={slider.id}>
                <div className='card_container'>
                    <img src={icone} className='card_icone'/>
                    <div className='card_description'>
                        <h3>{slider.title}</h3>
                        <p>{slider.description}</p>
                        <Link className='leran-more'>Leran More</Link>
                    </div>
                    
                </div>
            </SwiperSlide>))
        }
     
      
    </Swiper>
      
  
  );
};