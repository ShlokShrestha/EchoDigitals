import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const AboutButton = () => {
  const navigation = useNavigate();
  const handleNavigation = () => {
    navigation("/about");
  };
  return (
    <div>
      <button className="worktog mt-4 me-2 fw-bold" onClick={handleNavigation}>
        Know More About Us <BsArrowRight />
      </button>
    </div>
  );
};

export default AboutButton;
