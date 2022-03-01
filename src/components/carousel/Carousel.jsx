import React,{useState} from 'react';
import SpeakerBox from "../SpeakerBox";
import {  Speakers } from "../../data";
import{FaArrowAltCircleRight,FaArrowAltCircleLeft} from "react-icons/fa";
import "./carousel.css";






// function Carousel() {
//     const[current,setCurrent]=useState(0);
//     const length= Speakers.length;

//     const nextSlide = () => {
//         setCurrent(current===length-3?0:current+1);
//     };

//     const prevSlide = () => {
//         setCurrent(current===0?length-3:current-1);
//     };
//   return <section className='slider'>
//   <FaArrowAltCircleLeft class="left-arrow" onClick={prevSlide} />
//   <FaArrowAltCircleRight class="right-arrow" onClick={nextSlide} />
//  {
//                         Speakers.map((speaker,index) => {
//                             return (
//                                 <div className='carasoul'>
//                                 <div className={index===current?'slide-active inactive':'slide'} key={index}>
//                                 {index===current && (<SpeakerBox data={speaker}  />)}
//                                 </div>
//                                 <div className={index===current+1?'slide-active ':'slide'}  key={index}>
//                                 {index===current+1 && (<SpeakerBox data={speaker}  />)}
//                                 </div>
//                                 <div className={index===current+2?'slide-active inactive':'slide'}key={index}>
//                                 {index===current+2 && (<SpeakerBox data={speaker}  />)}
//                                 </div>
                            
//                                 </div>
                              
                                
//                         )
                            
//                         })
//                     }

//   </section>
// }



// function Carousel() {
//     const [current, setCurrent] = useState(0);
//     const[prev,setPrev]=useState(0);

//     const[next,setNext]=useState(0);

//     // const [yo, setYo] = useState(0);
//     const length = Speakers.length;
 
  
  
//     const nextSlide = () => {
//       setCurrent(current=== length-1?0:current+1);
//     //   setYo(yo === length - 1 ? 0 : yo + 1);
//     };
  
//     const prevSlide = () => {
//       setCurrent(current === 0?length-1:current-1);
//     //   setYo(yo === 0 ? length - 1 : yo - 1);
//     };
//     return (
//       <section className="slider">
//         <FaArrowAltCircleLeft class="left-arrow" onClick={prevSlide} />
//         <FaArrowAltCircleRight class="right-arrow" onClick={nextSlide} />
//         {Speakers.map((speaker, index) => {
//           return (
//             <div className="carasoul">
         
//             <div className={index === (current === 0?length-1:current-1) ? "slide-active inactive" : "slide"}key={index}>
//                 {index === (current === 0?length-1:current-1)  && <SpeakerBox data={speaker} />}
//               </div>

//               {/* <div className={index === (current-1+length)%length ? "slide-active inactive" : "slide"}key={index}>
//                 {index === (current === 0?length-1:current-1)  && <SpeakerBox data={speaker} />}
//               </div> */}

//             <div
//                 className={index === (current) ? "slide-active" : "slide"}
//                 key={index}
//               >
//                 {index === (current) && <SpeakerBox data={speaker} />}
//               </div>
              
               
//               <div className={index ===(current === length-1?0:current+1) ? "slide-active inactive" : "slide"} key={index}>
//                 {index === (current === length-1?0:current+1) && <SpeakerBox data={speaker} />}
//               </div> 
//               {/* <div className={index ===(current == current+1+length)%length) ? "slide-active inactive" : "slide"} key={index}>
//                 {index === (current === length-1?0:current+1) && <SpeakerBox data={speaker} />}
//               </div> */}
            

//             </div>
       
            
//           );
//         })}
//       </section>
//     );
//   }



function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = Speakers.length;

  const nextSlide = () => {
    setCurrent(current === length - 3 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 3 : current - 1);
  };
  return (
    <section className="slider">
      <FaArrowAltCircleLeft class="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight class="right-arrow" onClick={nextSlide} />
      {Speakers.map((speaker, index) => {
        return (
          <div className="carasoul">
            
            <div className={index === (current)%length ? "slide-active inactive" : "slide"} >
              {index === (current)%length && <SpeakerBox data={speaker} />}
            </div>
            
            <div className={index === (current + 1)%length ? "slide-active" : "slide"}>
              {index === (current + 1)%length && <SpeakerBox data={speaker} />}
            </div>

            <div className={index === (current + 2)%length ? "slide-active inactive" : "slide"}>
              {index === (current + 2)%length && <SpeakerBox data={speaker} />}
            </div>
          
          </div>
        );
      })}
    </section>
  );
}


export default Carousel;
