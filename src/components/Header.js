import React from "react";

const Header = ({ themeColor, handleChange, classDisplayed }) => {
   return (
      <div className="header">
         <h1 className="header-title">calc</h1>
         <div className="header-theme">
            <h2>theme</h2>
            <div className="header-radio-container">
               <div className="header-radios">
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
                  <span className={`moving-ball ${classDisplayed}`}></span>
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
