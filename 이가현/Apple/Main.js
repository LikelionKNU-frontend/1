// main.js
const mainBanner = document.createElement("div");
mainBanner.className = "main-banner";

mainBanner.innerHTML = `
  <div class="text-block">
    <h1>
      <span class="black">스토어.</span>
      <span class="gray">좋아하는 Apple 제품을</span>
      <span class="gray">
        <br />
        구입하는 가장 좋은 방법.
      </span>
    </h1>
  </div>
`;

document.body.appendChild(mainBanner);
