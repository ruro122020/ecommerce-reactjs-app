import React from "react";
import Carousel from "react-bootstrap/Carousel";
import cakeImg from "../../assets/images/cake.jpg";
import "./mobile/Cakes.css";

const cakes = [
  {
    img: "",
    name: "",
    price: "",
    decription: "",
    inStock: "",
  },
  {
    img: "",
    name: "",
    price: "",
    decription: "",
    inStock: "",
  },
  {
    img: "",
    name: "",
    price: "",
    decription: "",
    inStock: "",
  },
  {
    img: "",
    name: "",
    price: "",
    decription: "",
    inStock: "",
  },
  {
    img: "",
    name: "",
    price: "",
    decription: "",
    inStock: "",
  },
  {
    img: "",
    name: "",
    price: "",
    decription: "",
    inStock: "",
  },
  {
    img: "",
    name: "",
    price: "",
    decription: "",
    inStock: "",
  },
  {
    img: "",
    name: "",
    price: "",
    decription: "",
    inStock: "",
  },
  {
    img: "",
    name: "",
    price: "",
    decription: "",
    inStock: "",
  },
  {
    img: "",
    name: "",
    price: "",
    decription: "",
    inStock: "",
  },
];

const Cakes = () => {
  return (
    <div className="carousel_wrapper">
      <Carousel className="carousel" interval={null}>
        {cakes.map((cake, i) => {
          return (
            <Carousel.Item key={i} className="card">
              <img className="img" src={cakeImg} alt="First slide" />
              <p>name of picture</p>
              <p>price</p>
              <p>description</p>
              <p>#Stock</p>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Cakes;
// <div className="slider">
//   {cakes.map((cake, i) => {
//     return (
//       <div key={i} className="sliderContent">
//         <div className="slide">
//           <div className="wrapper">
//             <img className="img" src={cakeImg} />
//           </div>
//           <div className="wrapper">
//             <span>name</span>
//           </div>
//           <div className="wrapper">
//             <span>decription</span>
//           </div>
//           <div className="wrapper">
//             <span>price</span>
//           </div>
//           <div className="wrapper">
//             <span>in stock</span>
//           </div>

//           <div className="meter_button_wrapper">
//             <div className="meter">
//               dots meter to show how many more swipes you have left
//             </div>
//             <button>left arrow</button>
//             <button>right arrow</button>
//           </div>
//         </div>
//       </div>
//     );
//   })}
// </div>
