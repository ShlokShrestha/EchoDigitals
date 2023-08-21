import React from "react";
import FeatureData from "../../data/FeatureData";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const FeatureCard = () => {
  return (
    <div className="cards-design px-3">
      <div className="text-center py-4 ">
        <h2 className="fw-bold fs-1">Featured Services</h2>
        <p>
          A company that specializes in providing a range of digital marketing
          and advertising services to clients.
        </p>
      </div>
      <div className="container">
        <div className="row g-4">
          {FeatureData.map((item) => (
            <div className="col-lg-4 col-md-6 col-12" key={item.id}>
              <div className="card p-4">
                <div className="card-body ">
                  <img src={item.img} width={80} alt="a" className="my-3" />
                  <h4 className="card-title my-3 fw-bold ">{item.title}</h4>
                  <p className="card-text my-3 ">{item.overview}</p>
                  <Link to="/about" class="card-link fw-semibold">
                    Learn More <BsArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
