import React from "react";
import { MdEmail, MdPhone, MdAccessTime, MdFacebook } from "react-icons/md";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container py-5 px-4 text-white">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 mt-3">
            <img
              src="/img/footerlogo.png"
              alt="abc"
              className="img-fluid "
              width={90}
            />
            <p className="text-white my-4">
              For almost 20 years, our team of experts has worked together with
              a single goal.
            </p>
            <div className="icon mt-4">
              <span className="me-3">
                <MdFacebook size={20} />
              </span>
              <span className="me-3">
                <FaInstagram size={20} />
              </span>
              <span className="me-3">
                <FaTwitter size={20} />
              </span>
              <span className="me-3">
                <FaLinkedin size={20} />
              </span>
              <span className="me-3">
                <FaPinterest size={20} />
              </span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mt-3">
            <h4>Reach Us</h4>
            <div className="mt-4">
              <p>
                <MdPhone size={20} className="me-2" />
                +977-9876541232
              </p>
              <p>
                <MdEmail size={20} className="me-2" />
                abc@gmail.com
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mt-3">
            <h4>Navbar Links</h4>
            <ul className="mt-4 p-0">
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Our Team</li>
              <li>Testimonials</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mt-3">
            <h4>Recent Posts</h4>
            <div className="row g-2">
              <div className="col-lg-12">
                <div className="d-flex">
                  <img
                    src="https://rarathemesdemo.com/rara-business-pro-4/wp-content/uploads/sites/175/2022/12/dylan-gillis-KdeqA3aTnBY-unsplash-1.jpg"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <p className="ms-3">
                    A company limited by guarantee of user and customer.
                  </p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="d-flex">
                  <img
                    src="https://rarathemesdemo.com/rara-business-pro-4/wp-content/uploads/sites/175/2022/12/dylan-gillis-KdeqA3aTnBY-unsplash-1.jpg"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <p className="ms-3">
                    A company limited by guarantee of user and customer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
