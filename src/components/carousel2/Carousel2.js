import React, { useState,useRef,useEffect } from "react";
import Quotations from "../Quotations";
import { Speakers } from "../../data";
import { insights } from "../../data";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./Carousel2.css";
import { useSwipeable } from "react-swipeable";


function Carousel2() {
  const [current, setCurrent] = useState(0);
  const length = insights.length;
  const count = useRef(0);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
  });
  useEffect(() => {
    setInterval(() => {
      count.current = count.current + 1;
      setCurrent(count.current);
    }, 5000);
  }, []);
  return (
    <section className="slider2" {...handlers} >
      <FaArrowAltCircleLeft class="left-arrow2" onClick={prevSlide} />
      <FaArrowAltCircleRight class="right-arrow2" onClick={nextSlide} />
      {insights.map((insights, index) => {
        return ( 
          <div className="carasoul2">
            <div
              className={index === current ? "slide-active2" : "slide2"}
              key={index}
            >
              {index === current && <Quotations data={insights} />}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Carousel2;
