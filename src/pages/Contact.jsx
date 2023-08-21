import React, { useEffect } from "react";
import { MdLocationPin, MdLocalPhone, MdOutlineEmail } from "react-icons/md";
const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="contact-page">
      <div className="heading text-center">
        <h1 className="fw-bold"> Get In Touch</h1>
      </div>

      <section className="page-header">
        <div className="container py-5">
          <div className="row px-4 gy-4">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="mt-3">
                <div className="d-flex mb-4">
                  <span className="my-auto icons">
                    <MdLocationPin size={30} />
                  </span>
                  <div className="ms-3">
                    <span>Address</span>
                    <h5> Baneshwor, Kathmandu</h5>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <span className="my-auto icons">
                    <MdLocalPhone size={30} />
                  </span>
                  <div className="ms-3">
                    <span>Contact</span>
                    <h5> +977 9876541232</h5>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <span className="my-auto icons">
                    <MdOutlineEmail size={30} />
                  </span>
                  <div className="ms-3">
                    <span>Email</span>
                    <h5> abc@gmail.com</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="form">
                <form action="">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="text" placeholder="Subject" />
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="8"
                    placeholder="Message"
                  ></textarea>
                  <button className="submit fw-semibold ">Submit Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
