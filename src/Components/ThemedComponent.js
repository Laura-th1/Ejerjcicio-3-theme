import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); 

  const styles = {
    background: theme === "claro" ? "#fff" : "black", 
    color: theme === "claro" ? "black" : "#fff", 
    padding: "360px",
    textAlign: "center",
  };

  return (
    <div style={styles}>
      <p>El tema actual es: {theme}</p>
      <button onClick={toggleTheme}>Cambiar Tema</button>
    </div>
  );
};
export default ThemedComponent;