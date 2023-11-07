import React from "react";
import { MAIN_BANNER_URL } from "../constants/commonImageUrl";

const ImageSection = () => {
  return (
    <div className="content">
      <span className="image fill" data-position="center">
        <img src={MAIN_BANNER_URL} alt="" />
      </span>
    </div>
  );
};

export default ImageSection;
