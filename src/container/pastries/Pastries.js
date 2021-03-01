import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import croissant from "../../assets/images/CROISSANTS.jpg";
import background from "../../assets/images/inside.jpg";
import "./mobile/Pastries.css";

const Pastries = () => {
  const [pastries, setPastries] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    //get data from backend server
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setPastries(response.data);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };
  console.log("Pastries", pastries);
  return (
    <div className="carousel_wrapper">
      <Carousel interval={null}>
        {pastries.map((pastry, i) => {
          return (
            <Carousel.Item>
              <img className="w-50" height="50" src={croissant} />

              <h3>{pastry.name}</h3>
              <p>{pastry.description}</p>
              <p>${pastry.price}.00</p>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Pastries;
