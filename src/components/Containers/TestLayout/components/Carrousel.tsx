/* eslint-disable jsx-a11y/img-redundant-alt */
import { FC, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const CarouselSection: FC = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const swiperInstance = (document.querySelector('.mySwiper') as any)?.swiper;
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        loop={true}
        modules={[EffectFade, Navigation]}
        className="mb-5 rounded-lg mySwiper aspect-video"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt='image' className='object-cover w-full h-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt='image' className='object-cover w-full h-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt='image' className='object-cover w-full h-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt='image' className='object-cover w-full h-full' />
        </SwiperSlide>
      </Swiper>

      {/* Custom navigation buttons */}
      <div className="absolute z-10 transform -translate-y-1/2 left-5 top-1/2">
        <button ref={prevRef} className="swiper-button-prev-custom">
          <ArrowLeft />
        </button>
      </div>
      <div className="absolute z-10 transform -translate-y-1/2 right-5 top-1/2">
        <button ref={nextRef} className="swiper-button-next-custom">
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CarouselSection;
