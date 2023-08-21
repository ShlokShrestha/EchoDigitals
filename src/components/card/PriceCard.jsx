import React from "react";
import PriceData from "../../data/PriceData";
import { AiFillRightCircle } from "react-icons/ai";
const PriceCard = () => {
  return (
    <div className="cards-design">
      <div className="container">
        <div className="text-center py-4 ">
          <h2 className="fw-bold fs-1">
            Pricing <span className="blueheading">Plans</span>
          </h2>
          <p>
            A company that specializes in providing a range of digital marketing
            and advertising services to clients.
          </p>
        </div>
        <div className="px-3">
          <div className="row g-5 d-flex align-items-center">
            {PriceData.map((item) => (
              <div className="col-lg-4 col-md-6 col-12 " key={item.id}>
                <div class="card ">
                  <div class="card-body py-5 text-center ">
                    <h3 class="card-title my-3 fw-bold">{item.title}</h3>
                    <h4 class="card-subtitle mb-2 fw-semibold">
                      {item.subtitle}
                    </h4>
                    <div className="d-flex justify-content-center mb-4">
                      <span className="fw-bold fs-4 my-auto me-1">$</span>
                      <h1>{item.price}</h1>
                      <span className="my-auto text-secondary">/monthly</span>
                    </div>
                    <div className="mx-auto mb-4">
                      {["opt1", "opt2", "opt3", "opt4", "opt5", "opt6"].map(
                        (opt, index) => (
                          <div
                            className="d-flex align-items-center px-3 mb-2 mt-2"
                            key={index}
                          >
                            <span className="text-primary">
                              {item.feature[opt] ? (
                                <AiFillRightCircle
                                  size={25}
                                  className="featicon "
                                />
                              ) : (
                                ""
                              )}
                            </span>
                            <p
                              className="fs-6 ms-2 fw-semibold mb-0"
                              key={index}
                            >
                              {item.feature[opt]}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                    <button className="trailbtn">Start Your Trail</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
