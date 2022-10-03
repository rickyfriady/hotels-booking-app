/* eslint-disable react/jsx-props-no-spreading */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { useRef, useCallback } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

import 'swiper/css';
import 'swiper/css/pagination';

function HomeCard() {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const imageData = [
    { src: 'https://source.unsplash.com/472x230?cat' },
    { src: 'https://source.unsplash.com/472x230' },
    { src: 'https://source.unsplash.com/472x230?dog' },
    { src: 'https://source.unsplash.com/472x230' },
    { src: 'https://source.unsplash.com/472x230?animal' },
    { src: 'https://source.unsplash.com/472x230?mouse' },
    { src: 'https://source.unsplash.com/472x230?people' },
    { src: 'https://source.unsplash.com/472x230?car' },
    { src: 'https://source.unsplash.com/472x230?car' },
    { src: 'https://source.unsplash.com/472x230?car' },
  ];

  return (
    <div className="px-4 py-10 overflow-hidden ">
      <div className="flex justify-center items-center mt-2  relative">
        <Swiper
          ref={sliderRef}
          autoplay={
            {
              delay: 2500,
              disableOnInteraction: false,
            }
          }
          spaceBetween={10}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          centeredSlides
          modules={[Autoplay, Pagination]}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
          className="container mx-auto"
        >
          {imageData.map((photo) => (
            <SwiperSlide className="">
              <img className="object-cover rounded-lg " src={photo.src} alt="images" />

            </SwiperSlide>
          ))}
          <div className="mt-5 w-[230px] container mx-auto relative -top-2">
            <div className="flex justify-between items-center">
              <MdKeyboardArrowLeft type="submit" className="rounded text-white font-bold w-6 h-6 cursor-pointer" onClick={handlePrev} />
              <MdKeyboardArrowRight type="submit" className="rounded text-white font-bold w-6 h-6 cursor-pointer" onClick={handleNext} />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default HomeCard;
