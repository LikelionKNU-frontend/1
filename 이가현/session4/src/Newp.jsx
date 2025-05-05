import React from "react";
import "./Newp.css";
import newpro from "./images/newpro.png";
import watchs from "./images/watchseries.png";
import ipad from "./images/image 3.png";
import mac from "./images/image 2.png";

const New = () => {
  return (
    <section className="new">
      <div className="new-header">
        <h1>
          <span className="black">최신제품.</span>{" "}
          <span className="gray">따끈따끈한 신제품 이야기.</span>
        </h1>
      </div>
      <div className="newproduct">
        <div className="newpro">
          <div className="image1">
            <img src={newpro} alt="newpro" />
            <div className="text1">
              <p className="first1">iPhone 16 Pro</p>
              <p className="first2">Apple Intelligence</p>
              <p className="first3">1,550,000원부터</p>
            </div>
          </div>
        </div>
        <div className="newwatch">
          <div className="image2">
            <img src={watchs} alt="Apple Watch Series 10" />
            <div className="text2">
              <p className="second1">Apple Watch Series 10</p>
              <p className="second2">얇아진 두께. 더 커진 존재감.</p>
              <p className="second3">599,000부터</p>
            </div>
          </div>
        </div>
        <div className="airpad">
          <div className="image3">
            <img src={ipad} alt="iPad Air" />
            <div className="text3">
              <p className="third1">iPad Air</p>
              <p className="third2">바람처럼 빠르게</p>
              <p className="third3">949,000부터</p>
            </div>
          </div>
        </div>
        <div className="mac">
          <div className="image4">
            <img src={mac} alt="MacBook Air" />
            <div className="text4">
              <p className="fourth1">MacBook Air</p>
              <p className="fourth2">Apple Intelligence</p>
              <p className="fourth3">1,590,000부터</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default New;
