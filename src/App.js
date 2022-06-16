import "./styles/App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Screen from "./components/Screen";
import NumberButton from "./components/NumberButton";
import Operation from "./components/Operation";
import Special from "./components/Special";
import data from "./components/data";

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

   // work on th theme color of the entire body
   useEffect(() => {
      if (themeColor.theme === "default") {
         document.body.classList.add("theme-one");
         document.body.classList.remove("theme-two");
         document.body.classList.remove("theme-three");
      }
      if (themeColor.theme === "light") {
         document.body.classList.add("theme-two");
         document.body.classList.remove("theme-one");
         document.body.classList.remove("theme-three");
      }
      if (themeColor.theme === "bright") {
         document.body.classList.add("theme-three");
         document.body.classList.remove("theme-one");
         document.body.classList.remove("theme-two");
      }
   }, [themeColor]);

   // handling the buttons
   const buttonElements = data.map((button) => {
      if (Number(button)) {
         return <NumberButton number={button} />;
      } else if (button === "del" || "reset" || "=") {
         return <Special specialOperation={button} />;
      } else {
         return <Operation operation={button} />;
      }
   });

   return (
      <div className="App">
         {/* header component */}
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

         {/* screen component */}
         <Screen value={"399,981"} themeColor={themeColor} />

         {buttonElements}
      </div>
   );
}

export default App;
