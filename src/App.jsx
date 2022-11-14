import { Outlet } from "react-router-dom";
import { Header } from "./components/TopBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header themeToggle={themeToggle} />
      <Outlet />
      <ToastContainer autoClose={3000} />
    </ThemeProvider>
  );
}

export default App;
