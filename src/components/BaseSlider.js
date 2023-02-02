import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import "../css/swiper.css";
export default function BaseSlider() {
  return (
    <Swiper
      className="w-full shadow-2xl"
      spaceBetween={0}
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide className="!bg-slide-1">
        <h1>En kaliteli ve en uygun giysiler MRHYA.com'da!</h1>
      </SwiperSlide>
      <SwiperSlide className="!bg-slide-2">
        <h2>Daha fazla bilgi için bizimle iletişime geçin!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Perspiciatis, praesentium sequi! Ipsum id natus deleniti earum, quis
          error? Dolore repellendus cupiditate aliquam debitis maxime nisi quae
          rerum dolorem consequuntur! Veniam.
        </p>
      </SwiperSlide>
      <SwiperSlide className="!bg-slide-3">
        <h2>Doğru adrestediniz!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Perspiciatis, praesentium sequi! Ipsum id natus deleniti earum, quis
          error? Dolore repellendus cupiditate aliquam debitis maxime nisi quae
          rerum dolorem consequuntur! Veniam.
        </p>
      </SwiperSlide>
    </Swiper>
  );
}
