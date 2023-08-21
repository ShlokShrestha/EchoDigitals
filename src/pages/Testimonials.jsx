import React, { useEffect } from "react";
import ImproveCard from "../components/card/ImproveCard";

const Testimonials = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="ourTeam">
      <div className="heading text-center">
        <h1 className="fw-bold">What People Says</h1>
      </div>
      <div className="testimonials-clean">
        <div className="container py-5 px-4">
          <div className="row people g-4">
            <div className="col-md-6 col-lg-4 item">
              <div className="box ">
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cumque atque commodi deserunt repellat fugit? Voluptates
                  reiciendis hic mollitia alias corrupti.
                </p>
              </div>
              <div className="author">
                <img
                  className="rounded-circle w-25"
                  src="https://epicbootstrap.com/freebies/snippets/testimonials/assets/img/1.jpg"
                />
                <h5 className="name">Ben Johnson</h5>
                <p className="title">CEO of Company Inc.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <div className="box">
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cumque atque commodi deserunt repellat fugit? Voluptates
                  reiciendis hic mollitia alias corrupti.
                </p>
              </div>
              <div className="author">
                <img
                  className="rounded-circle w-25"
                  src="https://epicbootstrap.com/freebies/snippets/testimonials/assets/img/3.jpg"
                />
                <h5 className="name">Carl Kent</h5>
                <p className="title">Founder of Style Co.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <div className="box">
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cumque atque commodi deserunt repellat fugit? Voluptates
                  reiciendis hic mollitia alias corrupti.
                </p>
              </div>
              <div className="author">
                <img
                  className="rounded-circle w-25"
                  src="https://epicbootstrap.com/freebies/snippets/testimonials/assets/img/2.jpg"
                />
                <h5 className="name">Emily Clark</h5>
                <p className="title">Owner of Creative Ltd.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ImproveCard />
    </div>
  );
};

export default Testimonials;
