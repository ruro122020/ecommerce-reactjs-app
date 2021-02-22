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
