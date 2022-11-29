import style from './style.module.scss';
import testimonials from '../../../testimonial.config.json';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";


export default function Testimonial() {

  return (
    <section className={style.testimonials}>
      <div className={style.container}>
          <h1 className={style.title}>What our clients are saying?</h1>
          <Swiper  
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
                {
                  testimonials.testimonials.map(testimonial => (
                    <SwiperSlide className={style.testimonial_list}  key={testimonial.id} >
                      <div className={style.testimonial}>
                        <p>{testimonial.testimony}</p>
                        {testimonial.name}
                      </div>
                    </SwiperSlide>
                  ))
                }
          </Swiper>
      </div>

     
        
    
    </section>

  )
}

