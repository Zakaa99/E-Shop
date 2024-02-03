import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import Banner from "./banner/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import "./slider.css";

export default function Sale() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [dis, setDiscount] = useState(50);


  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      const response = await fetch(
        "https://course-api.com/react-store-products"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  };

  const discount = (newprice) => {
    const x = parseInt(newprice);
    const y = dis / 100;
    const result = x - x * y;
    
    return (
      <>
        <span>
           
          {"  "} ${result}
        </span>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <Swiper 
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          spaceBetween={2}
          slidesPerView={3}
            navigation
          scrollbar={{ draggable: true, dragSize: 150 }}
          style={{
            "--swiper-navigation-size": "15px",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetweenSlides: 150,
            },
            768: {
              slidesPerView: 2,
            },
            1060: {
              slidesPerView: 3,
            },
          }}
        >
          {filter.map((product) => (
            <SwiperSlide key={product.id} className="  ">
              <div className="  flex items-center justify-center bg-white w-screen min-h-screen ">
                <div className="container ml-auto mr-auto flex flex-wrap items-start">
                  <div className="w-full md:w-1/2 lg:w-1/4 pl-10 pr-14 first-line: lg:pl-8 lg:pr-2">
                    <div className="  rounded-lg m-h-64   transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                      <figure className="mb-2 group relative ">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-64 ml-auto mr-auto"
                        />

                        <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#fbfffe87] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                          <Link
                            className="mt-5 px-8 py-3 rounded-full text-white  bg-slate-900 hover:bg-orange-400 duration-300"
                            to={`/products/${product.id}/`}
                          >
                            <FaSearch size={30} />
                          </Link>
                        </div>
                      </figure>
                      <div className="rounded-lg p-4 bg-slate-900 flex flex-col">
                        <div>
                          <h5 className="mb-5 uppercase text-lg font-bold leading-none text-white">
                            {product.name}
                          </h5>
                          <span className="text-xs text-gray-400 leading-none"></span>
                        </div>
                        <div className="flex items-center">
                          <div className=" text-white ">
                            <span className="text-sm text-gray-600 line-through ">
                              $ {product.price}
                            </span>

                            <span className="text-lg font-bold text-orange-500 ">
                              {discount(product.price)}
                            </span>
                          </div>
                          <div class="rounded-full bg-gray-800 text-white   w-20 h-16 flex ml-auto  ">
                            <span className="font-bold text-sm p-3 rounded-full text-white bg-orange-500 mx-5">
                              SAVE {dis}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  };

  return (
    <>
      <Banner />

      {loading ? <Loading /> : <ShowProducts />}

      <div className="py-10 bg-white"></div>
    </>
  );
}
