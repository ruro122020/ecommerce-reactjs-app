import React from "react";
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
    <div className="cakes_wrapper">
      {cakes.map((cake) => {
        return (
          <div className="cake">
            <div className="wrapper">
              <img className="img" src={cakeImg} />
            </div>
            <div className="wrapper">
              <span>name</span>
            </div>
            <div className="wrapper">
              <span>decription</span>
            </div>
            <div className="wrapper">
              <span>price</span>
            </div>
            <div className="wrapper">
              <span>in stock</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cakes;
