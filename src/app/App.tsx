import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
//
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { AboutPage } from "pages/About";
import { MainPage } from "pages/Main";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={classNames("app", { hover: true, visited: true }, [
        "cls1",
        "cls2",
      ])}
    >
      <button onClick={toggleTheme}>{theme}</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
