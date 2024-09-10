import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaClover } from "react-icons/fa6";
import { FaStopwatch, FaTimes } from "react-icons/fa";

const Story = ({ story: { news, title } }) => {
  const sliderRef = useRef(null); // Create a reference to the slider

  const sliderSettings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    dots: false,
    pauseOnHover: false, // Disable default pause on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Custom hover handlers to pause and resume the slider
  const handleMouseEnter = () => {
    sliderRef.current.slickPause(); // Pause the slider on hover
  };

  const handleMouseLeave = () => {
    sliderRef.current.slickPlay(); // Resume the slider when hover ends
  };

  return (
    <div className="nike-container my-8">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <Slider {...sliderSettings} ref={sliderRef}>
        {news.map((item, index) => (
          <div
            key={index}
            className="p-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="border rounded-lg shadow-lg overflow-hidden transition-transform duration-500 hover:scale-105">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-black mb-2">{item.text}</p>
                <div className=" flex justify-between">
                  <p className="text-xs text-red-900">By {item.by}</p>
                  <div className="flex gap-2 items-center">
                    <p>
                      <FaStopwatch></FaStopwatch>
                    </p>
                    <p>{item.time}</p>
                  </div>
                  <p>
                    <span>❤️</span> •{item.like}
                  </p>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full  inline-block bg-black text-center text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  {item.btn}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Story;
