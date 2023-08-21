import React, { useEffect } from "react";
import TeamCard from "../components/card/TeamCard";
import ImproveCard from "../components/card/ImproveCard";
const OurTeam = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="ourTeam">
      <div className="heading text-center">
        <h1 className="fw-bold"> Meet our Experts</h1>
      </div>
      <TeamCard />
      <ImproveCard />
    </div>
  );
};

export default OurTeam;
