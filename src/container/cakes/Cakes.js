import React from "react";
import Carousel from "react-bootstrap/Carousel";

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
              {/* <img className="img" alt="First slide" /> */}
              <Carousel.Caption>
                <p>name of picture</p>
                <p>price</p>
                <p>description</p>
                <p>#Stock</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Cakes;
