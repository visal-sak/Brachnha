"use client";

import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../app/utils/assets/loading.json";
import  "./loading.module.css"

const Loading = ({ progress }) => {
  return (
    <div className="loading-container bg-white-100 py-28 xl:py-0">
      <div className="loading-animation">
        <Lottie animationData={loadingAnimation} progress={progress / 100} />
        <div className="loading-progress-bar">
          <div
            className="loading-progress-bar-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
