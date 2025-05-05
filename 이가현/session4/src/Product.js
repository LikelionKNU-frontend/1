import React from "react";
import "./Product.css";
import mac from "./images/image 51.png";
import iphone from "./images/image 52.png";
import ipad from "./images/image 45.png";
import applewatch from "./images/image 46.png";
import visionpro from "./images/image 47.png";
import airpods from "./images/image 48.png";
import airtag from "./images/image 49.png";

function Product() {
  return (
    <div className="product">
      <div className="item">
        <img src={mac} alt="Mac" />
        <p>Mac</p>
      </div>
      <div className="item">
        <img src={iphone} alt="iPhone" />
        <p>iPhone</p>
      </div>
      <div className="item">
        <img src={ipad} alt="iPad" />
        <p>iPad</p>
      </div>
      <div className="item">
        <img src={applewatch} alt="Apple Watch" />
        <p>Apple Watch</p>
      </div>
      <div className="item">
        <img src={visionpro} alt="Vision Pro" />
        <p>Vision Pro</p>
      </div>
      <div className="item">
        <img src={airpods} alt="AirPods" />
        <p>AirPods</p>
      </div>
      <div className="item">
        <img src={airtag} alt="AirTag" />
        <p>AirTag</p>
      </div>
    </div>
  );
}

export default Product;
