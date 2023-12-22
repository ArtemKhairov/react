import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
//
import { AboutPageLazy } from "./pages/About/AboutPage.async";
import { MainPageLazy } from "./pages/Main/MainPage.async";
import { ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
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
