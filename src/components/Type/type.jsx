import React from "react";
import "./type.css";

const Type = ({ userName }) => {
  const slang = userName.split(" ");

  const shortName = slang[0].substr(1, 1) + slang[1].substr(1, 1);

  let random = "#";
  for (let i = 0; i < 5; i++) {
    random += Math.floor(Math.random() * 16);
  }
  const styles = {
    backgroundColor: random,
    textTransform: "uppercase",
    padding : '5px',
    borderRadius : '5px'
  };

  return (
    <div className="type-box">
      <p className="text-center">
        <input type="checkbox"></input>
      </p>
      <p className="text-center d-inline-block" style={styles}>
        {shortName}
      </p>
    </div>
  );
};

export default Type;
