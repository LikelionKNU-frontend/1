const header = document.createElement("header");
header.className = "header";

header.innerHTML = `
  <div class="logo">
    <img src="./images/logo.png" alt="Apple Logo" />
  </div>
  <nav class="nav">
    <ul>
      <li>스토어</li>
      <li>Mac</li>
      <li>iPad</li>
      <li>iPhone</li>
      <li>Watch</li>
      <li>Vision</li>
      <li>AirPods</li>
      <li>TV 및 홈</li>
      <li>엔터테인먼트</li>
      <li>액세서리</li>
      <li>고객지원</li>
    </ul>
  </nav>
  <div class="searchicon">
    <img src="./images/search.png" alt="search" />
  </div>
  <div class="carticon">
    <img src="./images/cart.png" alt="cart" />
  </div>
`;

document.body.prepend(header);
