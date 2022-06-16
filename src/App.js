import "./styles/App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";

function App() {
   // maintaining state for the theme to be used
   const [themeColor, setThemeColor] = useState({ theme: "default" });
   /* Our theme colors are either default, light, bright*/
   function handleChange(event) {
      const { name, value } = event.target;
      setThemeColor((prevTheme) => ({
         ...prevTheme,
         [name]: value,
      }));
   }

   console.log("the theme color ", themeColor);

   return (
      <div className="App">
         <Header
            themeColor={themeColor}
            handleChange={handleChange}
            classDisplayed={
               themeColor.theme === "default"
                  ? "default-label"
                  : themeColor.theme === "light"
                  ? "to-light"
                  : "to-bright"
            }
         />
      </div>
   );
}

export default App;
