import React from "react";
import Aboutpage from "./Pages/Aboutpage";
import { RefillStation } from "./Pages/RefillStation";
import { Sets } from "./Pages/Sets";
import { Shop } from "./Pages/Shop";

export const App = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        {/* <Aboutpage /> */}
        {/* <RefillStation /> */}
        {/* <Sets /> */}
        <Shop/>
      </div>
    </>
  );
};
