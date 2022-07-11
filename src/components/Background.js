import "../styles/Background.css";
import { useState } from "react";

export const Background = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="Container">
      <div className="Item">
        <button onClick={() => setIsActive(!isActive)} className="Button">
          <div className="ButtonText">Industrial</div>
        </button>
      </div>
      <div className="Item">
        <button onClick={() => setIsActive(!isActive)} className="Button">
          <div className="ButtonText">Academic</div>
        </button>
      </div>
    </div>
  );
};
