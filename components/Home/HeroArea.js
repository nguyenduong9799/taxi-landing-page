import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import SwiperCore, { Navigation, EffectFade } from "swiper";
SwiperCore.use([Navigation]);

const HeroArea = () => {
  const sliderData = [
    {
      id: 1,
      title:
        "Bạn muốn trải nghiệm chuyến đi an toàn và êm ái? Hãy đồng hành cùng chúng tôi",
      img: "assets/img/slider/taxi-bg.jpg",
    },
    {
      id: 2,
      title: (
        <>
          Đã đến lúc <br /> thay đổi trải nghiệm đi xe của bạn!
        </>
      ),
      img: "assets/img/slider/taxi-bg1.jpg",
    },
  ];
  return (
    <>
      <section className="slider__area">
        <div className="slider__active swiper-container">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            effect={"fade"}
            className="swiper-wrapper"
            modules={[EffectFade]}
            navigation={{
              nextEl: ".slider-button-next",
              prevEl: ".slider-button-prev",
            }}
          >
            {sliderData.map((slider) => {
              return (
                <SwiperSlide
                  key={slider.id}
                  className="slider__item swiper-slide p-relative slider__height d-flex align-items-center z-index-1"
                >
                  <div
                    className="slider__bg slider__overlay include-bg"
                    style={{
                      background: `url(${slider.img})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xxl-7 col-xl-8 col-lg-8 col-md-10 col-sm-10">
                        <div className="slider__content p-relative z-index-1">
                          {/* <span>Educal University</span> */}
                          <h2 className="slider__title">{slider.title}</h2>
                          <p>
                            Một chuyến đi êm ái và an toàn cũng có thể sạch sẽ
                            và sang trọng! Cảm thấy thoải mái với Taxi; nó đáng
                            tin cậy hơn bất kỳ taxi nào khác vì nó cung cấp các
                            dịch vụ an toàn và chuyên nghiệp.
                          </p>
                          <div className="slider__btn">
                            <Link href="/contact">
                              <a className="tp-btn">
                                Liên hệ Hotline: 0123456789
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="main-slider-paginations">
            <button className="slider-button-next">
              <i className="fa-regular fa-arrow-right"></i>
            </button>
            <button className="slider-button-prev">
              <i className="fa-regular fa-arrow-left"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroArea;
