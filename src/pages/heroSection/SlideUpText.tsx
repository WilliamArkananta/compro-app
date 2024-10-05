import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/TextAnimation.json"; // Adjust the path accordingly

const LottieAnimation: React.FC = () => {
  return (
    <div style={{ width: "300px" }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieAnimation;
