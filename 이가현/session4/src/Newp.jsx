import React from "react";
import "./Newp.css";
import newpro from "./images/newpro.png";
import watchs from "./images/watchseries.png";

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
      </div>
    </section>
  );
};

export default New;
