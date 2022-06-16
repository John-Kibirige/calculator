import React from "react";

const Screen = ({ value, themeColor }) => {
   let classAdded = "";
   if (themeColor.theme === "light") classAdded = "theme-two";

   if (themeColor.theme === "bright") classAdded = "theme-three";
   return (
      <div className={`screen-display ${classAdded}`}>
         <h1>{value}</h1>
      </div>
   );
};

export default Screen;
