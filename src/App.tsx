import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
//
import { AboutPageLazy } from "./pages/About/AboutPage.async";
import { MainPageLazy } from "./pages/Main/MainPage.async";

const App = () => {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageLazy />} />
          <Route path={"/"} element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
