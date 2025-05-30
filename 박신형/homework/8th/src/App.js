import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Count from "./pages/Count";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* 메뉴 */}
        <nav>
          <Link to="/">홈</Link> | <Link to="/list">목록</Link> |{" "}
          <Link to="/count">카운터</Link>
        </nav>

        <hr />

        {/* 페이지 라우팅 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/count" element={<Count />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
