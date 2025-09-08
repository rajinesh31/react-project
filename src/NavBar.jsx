import React from "react";
import { useData } from "./Context/Ex"; // use context to show/update gift

const NavBar = () => {
  const { surprise, setSurprise } = useData();

  return (
    <div className="navSection">
      <div className="logo">Gift App</div>

      <div className="giftInfo">
        <span>🎁 {surprise}</span>
        <button onClick={() => setSurprise("Mango")}>Change Gift</button>
      </div>
    </div>
  );
};

export default NavBar;
