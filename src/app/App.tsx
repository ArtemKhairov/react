import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

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
      <Navbar />
      <AppRouter />
    </div>
  );
};
export default App;
