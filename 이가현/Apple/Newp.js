// newp.js

const newSection = document.createElement("section");
newSection.className = "new";

newSection.innerHTML = `
  <div class="new-header">
    <h1>
      <span class="black">최신제품.</span> 
      <span class="gray">따끈따끈한 신제품 이야기.</span>
    </h1>
  </div>
  <div class="newproduct">
    <div class="newpro">
      <div class="image1">
        <img src="./images/newpro.png" alt="newpro" />
        <div class="text1">
          <p class="first1">iPhone 16 Pro</p>
          <p class="first2">Apple Intelligence</p>
          <p class="first3">1,550,000원부터</p>
        </div>
      </div>
    </div>
    <div class="newwatch">
      <div class="image2">
        <img src="./images/watchseries.png" alt="Apple Watch Series 10" />
        <div class="text2">
          <p class="second1">Apple Watch Series 10</p>
          <p class="second2">얇아진 두께. 더 커진 존재감.</p>
          <p class="second3">599,000부터</p>
        </div>
      </div>
    </div>
    <div class="airpad">
      <div class="image3">
        <img src="./images/image 3.png" alt="iPad Air" />
        <div class="text3">
          <p class="third1">iPad Air</p>
          <p class="third2">바람처럼 빠르게</p>
          <p class="third3">949,000부터</p>
        </div>
      </div>
    </div>
    <div class="mac">
      <div class="image4">
        <img src="./images/image 2.png" alt="MacBook Air" />
        <div class="text4">
          <p class="fourth1">MacBook Air</p>
          <p class="fourth2">Apple Intelligence</p>
          <p class="fourth3">1,590,000부터</p>
        </div>
      </div>
    </div>
  </div>
`;

document.body.appendChild(newSection);
