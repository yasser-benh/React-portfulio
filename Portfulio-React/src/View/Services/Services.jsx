import SwiperSection from "../../Components/swiper/Swiper";
import './services.css'
import { useTranslation } from "react-i18next";


export default function Services() {
    const {t, i18n} = useTranslation()

  return (
    <div className="services_main_container">
      <div className="services_container">
        <div className="services_title">
          <h4>Services</h4>
          <h1>
            {t("sericesPage.title")}<span>{t("sericesPage.titleSpan")}</span>
          </h1>
          <p>
            {t("sericesPage.description")}
          </p>

          
        </div>
       
      </div>
      <div className="swiper">
          <SwiperSection />
         
          </div>
    </div>
  );
}
