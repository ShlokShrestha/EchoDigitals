import React from "react";
import TeamData from "../../data/TeamData";
const TeamCard = () => {
  return (
    <div className="cards-design">
      <div className="container mx-auto">
        <div className="text-center py-4 ">
          <h2 className="fw-bold fs-1">
            Team <span className="blueheading">Experts</span>
          </h2>
          <p>
            A company that specializes in providing a range of digital marketing
            and advertising services to clients
          </p>
        </div>

        <div className="row gy-4">
          {TeamData.map((item) => (
            <div
              className="col-lg-3 col-md-4 col-6 text-center px-3"
              key={item.id}
            >
              <div className="card border-0">
                <div className="team-img">
                  <img
                    src={item.img}
                    className="individual card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
