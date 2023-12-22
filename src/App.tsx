import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
//
import { AboutPageLazy } from "./pages/About/AboutPage.async";
import { MainPageLazy } from "./pages/Main/MainPage.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", { hover: true, visited: true }, ["cls1", "cls2"])}>
      <button onClick={toggleTheme}>{theme}</button>
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
