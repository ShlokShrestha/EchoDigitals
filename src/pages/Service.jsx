import React, { useEffect } from "react";
import FeatureCard from "../components/card/FeatureCard";
import ImproveCard from "../components/card/ImproveCard";
const Service = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="ourTeam">
      <div className="heading text-center">
        <h1 className="fw-bold"> Services We Offer</h1>
      </div>
      <FeatureCard />
      <ImproveCard />
    </div>
  );
};

export default Service;
