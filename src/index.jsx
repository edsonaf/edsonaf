import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.scss";
// import reportWebVitals from "./reportWebVitals";

const Home = lazy(() => import("./PortfolioContainer/Portfolio"));
// const Main = lazy(() => import("./MainContainer/Main"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/main" element={<Main />} /> */}
        </Routes>
      </Suspense>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
