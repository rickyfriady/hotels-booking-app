/* eslint-disable react/jsx-props-no-spreading */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { useRef, useCallback } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

import 'swiper/css';

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
    { src: 'https://source.unsplash.com/472x230' },
    { src: 'https://source.unsplash.com/472x230' },
    { src: 'https://source.unsplash.com/472x230' },
    { src: 'https://source.unsplash.com/472x230' },
    { src: 'https://source.unsplash.com/472x230' },
    { src: 'https://source.unsplash.com/472x230' },
    { src: 'https://source.unsplash.com/472x230' },
    { src: 'https://source.unsplash.com/472x230' },
    { src: 'https://source.unsplash.com/472x230' },
    { src: 'https://source.unsplash.com/472x230' },
  ];

  return (
    <div className="mt-5 px-4 pt-10 overflow-hidden bg-heroSec">
      <div className="w-full max-w-5xl mx-auto mb-3">
        <h1 className="text-xl text-blue-400 font-Inter text-left capitalize">Our Promo this week</h1>
      </div>
      <div className="flex justify-center items-center mt-2 relative">
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
          modules={[Autoplay]}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
          className="container mx-auto"
        >
          {imageData.map((photo) => (
            <SwiperSlide className="">
              <img className="object-cover rounded-lg " src={photo.src} alt="images" />

            </SwiperSlide>
          ))}
          <div className="mt-5 w-[250px] container mx-auto relative -top-2">
            <div className="flex justify-between items-center gap-4">
              <button type="button" className="px-1 py-1 text-blue-400  leading-tight uppercase rounded-full  hover:bg-white hover:opacity-50 hover:shadow-lg  focus:outline-none focus:ring-0 active:bg-blue-400 active:shadow-lg transition duration-150 ease-in-out z-50" onClick={handlePrev}>
                <MdKeyboardArrowLeft className="w-6 h-full" />
              </button>
              <span className="py-2 text-sm font-Inter text-blue-400 cursor-pointer hover:underline">See more promo</span>
              <button type="button" className="px-1 py-1 text-blue-400  leading-tight uppercase rounded-full  hover:bg-white hover:opacity-50 hover:shadow-lg  focus:outline-none focus:ring-0 active:bg-blue-400 active:shadow-lg transition duration-150 ease-in-out z-50" onClick={handleNext}>
                <MdKeyboardArrowRight className="w-6 h-full" />
              </button>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default HomeCard;
