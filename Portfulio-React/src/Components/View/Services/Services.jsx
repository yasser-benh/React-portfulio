import SwiperSection from "./swiper/Swiper";
import './services.css'


export default function Services() {
  return (
    <div className="services_main_container">
      <div className="services_container">
        <div className="services_title">
          <h4>Services</h4>
          <h1>
            Exploring My Design <span>Skills</span>
          </h1>
          <p>
            We transform your ideas into a distinctive web project that both
            inspires you and captivates your customers
          </p>

          
        </div>
       
      </div>
      <div className="swiper">
          <SwiperSection />
         
          </div>
    </div>
  );
}
