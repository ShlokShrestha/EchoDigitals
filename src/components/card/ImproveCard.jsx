import React from "react";
import Button from "../Button/ContactButton";

const ImproveCard = () => {
  return (
    <div className="improve-business-section bg-overlay">
      <div className="container px-4">
        <div className="row gy-4">
          <div className="col-lg-6 col-md-6 col-12 ">
            <h1 className="fw-bold">
              Do you Want to Improve{" "}
              <span className="blueheading">Your Business?</span>
            </h1>
            <p className="my-3 ">
              It is a long established fact that a reader will be distract
              readable content of a page when looking at its layout.
            </p>
           <Button/>
          </div>
          <div className="col-lg-6 col-md-6 col-12 ">
            <img src="/img/your-business.png" alt="" className="w-100 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImproveCard;
