import React from "react";

const Header = ({ themeColor, handleChange, classDisplayed }) => {
   let classAdded = "";
   if (themeColor.theme === "light") classAdded = "theme-two";

   if (themeColor.theme === "bright") classAdded = "theme-three";

   return (
      <div className="header">
         <h1 className="header-title">calc</h1>
         <h2 className="header-theme-label">
            <span className="one">1</span>
            <span className="two">2</span>
            <span className="three">3</span>
         </h2>
         <div className="header-theme">
            <h2>theme</h2>
            <div className="header-radio-container">
               <div className={`header-radios ${classAdded}`}>
                  <div className="default">
                     <input
                        className="radio-input"
                        type="radio"
                        id="default"
                        name="theme"
                        value="default"
                        onChange={handleChange}
                        checked={themeColor.theme === "default"}
                     />
                     <label
                        htmlFor="default"
                        className={`default-label`}
                     ></label>
                  </div>
                  <span
                     className={`moving-ball ${classDisplayed} ${classAdded}`}
                  ></span>
                  <div className="light">
                     <input
                        className="radio-input"
                        type="radio"
                        id="light"
                        name="theme"
                        value="light"
                        onChange={handleChange}
                        checked={themeColor.theme === "light"}
                     />
                  </div>
                  <label htmlFor="light" className="not-displayed"></label>
                  <div className="bright">
                     <input
                        className="radio-input"
                        type="radio"
                        id="bright"
                        name="theme"
                        value="bright"
                        onChange={handleChange}
                        checked={themeColor.theme === "bright"}
                     />
                  </div>
                  <label htmlFor="bright" className="not-displayed"></label>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
