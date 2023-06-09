import style from './style.module.scss';
import testimonials from '../../../testimonial.config.json';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper";


export default function Testimonial() {

  return (
    <section className={style.testimonials}>
      <div className={style.container}>
          <h1 className={style.title}>What our clients are saying?</h1>
          <Swiper 
            navigation={{
              prevEl: 'swiper-button-prev',
              nextEl: 'swiper-button-next',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]} 
            loop={true}
            className={style.swiper}
          >
                {
                  testimonials.testimonials.map(testimonial => (
                    <SwiperSlide className={style.testimonial_list}  key={testimonial.id} >
                      <div className={style.testimonial}>
                        <p className={style.testimony}>{testimonial.testimony}</p>
                        <span className={style.testimony_name}>{testimonial.name}</span>
                      </div>
                    </SwiperSlide>
                  ))
                }
          </Swiper>
      </div>
    </section>

  )
}

