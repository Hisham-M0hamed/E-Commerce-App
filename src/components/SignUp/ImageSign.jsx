import React from "react";
// @ts-ignore
import Image from "../../images/sign.jpeg";

import "./sign.css";
const ImageSign = () => {
  return (
    <div className="image">
      <img src={Image} />
    </div>
  );
};

export default ImageSign;
