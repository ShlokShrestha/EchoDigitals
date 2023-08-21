import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Button = () => {
  const navigation = useNavigate();
  const handleNavigation = () => {
    navigation("/contact");
  };
  return (
    <div>
      <button className="worktog mt-4 me-2 fw-bold" onClick={handleNavigation}>
        Let's Work Together <BsArrowRight />
      </button>
    </div>
  );
};

export default Button;
