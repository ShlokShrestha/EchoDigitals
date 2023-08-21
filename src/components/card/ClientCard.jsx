import React from "react";
import ClientData from "../../data/ClientData";
const ClientCard = () => {
  return (
    <div className="cards-design">
      <div className="container mx-auto">
        <div className="text-center ">
          <h2 className="fw-bold fs-1 my-4">
            Our <span className="blueheading">Clients</span>
          </h2>
          <p className="mb-5">
            A company that specializes in providing a range of digital marketing
            and advertising services to clients
          </p>
        </div>

        <div className="row gy-4">
          {ClientData.map((item) => (
            <div
              className="col-lg-3 col-md-6 col-6 text-center p-3"
              key={item.id}
            >
              <img src={item.img} alt="client" className="w-md-50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
