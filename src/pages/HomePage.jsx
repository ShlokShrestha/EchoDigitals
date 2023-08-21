import React from "react";
import ClientCard from "../components/card/ClientCard";
import TeamCard from "../components/card/TeamCard";
import PriceCard from "../components/card/PriceCard";
import { AiFillRightCircle } from "react-icons/ai";
import FeatureCard from "../components/card/FeatureCard";
import ImproveCard from "../components/card/ImproveCard";
import Button from "../components/Button/ContactButton";
import AboutButton from "../components/Button/AboutButton";
const HomePage = () => {
  return (
    <div className="main-heading">
      <div className="bg-overlay">
        <div className="container px-4">
          <div className="row gy-4 ">
            <div className="col-lg-6 col-md-12 col-12">
              <h1 className="fw-bolder ">
                We're the best <br />
                <span className="blueheading">Digital </span>
                Services
                <br /> Agency
              </h1>
              <p className="my-3 fs-4 ">
                It is a long established fact that a reader will be distract
                readable content of a page when looking at its layout.
              </p>
              <Button />
            </div>
            <div className="col-lg-6 col-md-12 col-12 ">
              <img src="/img/banner.png" alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>
      
      <ClientCard />
      <div className="About-page bg-overlay">
        <div className="container px-4">
          <div className="row gy-4 ">
            <div className="col-lg-6 col-md-12 col-12 ">
              <img src="/img/core-feature.png" alt="" className="w-100" />
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <h1 className="fw-bolder ">Core Services & Features</h1>
              <p className="my-3 ">
                Digital agencies typically offer a range of core services that
                are designed to help businesses reach and engage with their
                target audience online.
              </p>
              <div className="row mb-3">
                <div className="col-lg-6 col-md-6 col-12">
                  <span className="fs-5 d-flex align-items-center mt-3">
                    <AiFillRightCircle size={25} className="featicon me-3" />{" "}
                    Web Design
                  </span>
                  <span className="fs-5 d-flex align-items-center mt-3">
                    <AiFillRightCircle size={25} className="featicon me-3" />{" "}
                    Digital Marketing
                  </span>
                  <span className="fs-5 d-flex align-items-center mt-3">
                    <AiFillRightCircle size={25} className="featicon me-3" />{" "}
                    App Design
                  </span>
                  <span className="fs-5 d-flex align-items-center mt-3">
                    <AiFillRightCircle size={25} className="featicon me-3" />{" "}
                    Graphic Design
                  </span>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <span className="fs-5 d-flex align-items-center mt-3">
                    <AiFillRightCircle size={25} className="featicon me-3" />{" "}
                    Affiliate Marketing
                  </span>
                  <span className="fs-5 d-flex align-items-center mt-3">
                    <AiFillRightCircle size={25} className="featicon me-3" />{" "}
                    Expert team
                  </span>
                  <span className="fs-5 d-flex align-items-center mt-3">
                    <AiFillRightCircle size={25} className="featicon me-3" />{" "}
                    24/7 support
                  </span>
                  <span className="fs-5 d-flex align-items-center mt-3">
                    <AiFillRightCircle size={25} className="featicon me-3" />{" "}
                    Monitoring
                  </span>
                </div>
              </div>
              <AboutButton />
            </div>
          </div>
        </div>
      </div>
      <FeatureCard />
      <div className="time-to-make-money-section bg-overlay">
        <div className="container px-4">
          <div className="row gy-4">
            <div className="col-lg-6 col-md-6 col-12 ">
              <h1 className="fw-bold">
                Its Time To Make Your <br />
                <span className="blueheading">Money Work </span>For You
              </h1>
              <p className="my-3 ">
                It is a long established fact that a reader will be distract
                readable content of a page when looking at its layout.
              </p>
              <Button />
            </div>
            <div className="col-lg-6 col-md-6 col-12 ">
              <img src="/img/wrok-money.png" alt="" className="w-100 " />
            </div>
          </div>
        </div>
      </div>
      <div className="how-it-work-section overlay">
        <div className="container px-4">
          <div className="row gy-4">
            <div className="col-lg-6 col-md-6 col-12 ">
              <img src="/img/how-it-work.png" alt="" className="w-100 " />
            </div>
            <div className="col-lg-6 col-md-6 col-12 ">
              <h1 className="fw-bold">
                How it
                <span className="blueheading"> Works</span>
              </h1>
              <div className="d-flex my-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                >
                  <rect
                    width="55"
                    height="55"
                    rx="27.5"
                    fill="currentColor"
                    fill-opacity="0.05"
                  ></rect>
                  <path
                    d="M26.9159 30.096C26.9159 30.3326 26.8219 30.5597 26.6546 30.727C26.4873 30.8943 26.2604 30.9884 26.0236 30.9884H15.8924C15.5735 30.9884 15.2789 30.8182 15.1195 30.5422C14.9602 30.2661 14.9602 29.9259 15.1195 29.6498C15.2789 29.3737 15.5735 29.2036 15.8924 29.2036H26.0236C26.2604 29.2036 26.4873 29.2976 26.6546 29.4649C26.8219 29.6323 26.9159 29.8593 26.9159 30.096ZM26.0236 32.7731H18.5695C18.2506 32.7731 17.956 32.9432 17.7966 33.2193C17.6373 33.4954 17.6373 33.8356 17.7966 34.1116C17.956 34.3877 18.2506 34.5578 18.5695 34.5578H26.0236C26.3425 34.5578 26.6371 34.3877 26.7964 34.1116C26.956 33.8356 26.956 33.4953 26.7964 33.2193C26.6371 32.9432 26.3425 32.7731 26.0236 32.7731ZM26.0236 36.3426H21.2468C20.9279 36.3426 20.6333 36.5127 20.4739 36.7888C20.3146 37.0648 20.3146 37.4051 20.4739 37.6811C20.6333 37.9572 20.9279 38.1273 21.2468 38.1273H26.0236C26.3425 38.1273 26.6371 37.9572 26.7964 37.6811C26.956 37.405 26.956 37.0648 26.7964 36.7888C26.6371 36.5127 26.3425 36.3426 26.0236 36.3426ZM30.7531 29.8584L34.3423 26.2737C34.5613 26.0471 34.6443 25.7218 34.5611 25.4178C34.4778 25.1139 34.2404 24.8764 33.9364 24.7932C33.6324 24.7099 33.3071 24.793 33.0805 25.0119L29.4933 28.5939C29.321 28.7602 29.223 28.9887 29.2208 29.2279C29.2188 29.4674 29.3128 29.6976 29.4821 29.8667C29.6514 30.036 29.8815 30.1303 30.1209 30.1281C30.3603 30.1261 30.5888 30.0279 30.7549 29.8558L30.7531 29.8584ZM31.0147 19.4497V17.7847H31.8588C32.1777 17.7847 32.4723 17.6146 32.6317 17.3386C32.791 17.0625 32.791 16.7223 32.6317 16.4462C32.4723 16.1701 32.1777 16 31.8588 16H28.3876C28.0687 16 27.7741 16.1701 27.6147 16.4462C27.4554 16.7223 27.4554 17.0625 27.6147 17.3386C27.7741 17.6146 28.0687 17.7847 28.3876 17.7847H29.2318V19.448C27.164 19.6308 25.2079 20.4664 23.6465 21.8343L22.4739 20.6616C22.2484 20.436 21.9198 20.3477 21.6116 20.43C21.3035 20.5122 21.0626 20.7529 20.9798 21.0608C20.8971 21.369 20.985 21.6978 21.2102 21.9235L22.4203 23.1326C21.6831 24.0648 21.121 25.1231 20.7615 26.2559C20.6762 26.5569 20.7547 26.8803 20.9684 27.1086C21.1819 27.3369 21.4995 27.4369 21.8054 27.372C22.1112 27.307 22.3608 27.0867 22.4631 26.7913C22.9746 25.1631 23.9931 23.7411 25.3701 22.7328C26.7471 21.7247 28.4103 21.1831 30.117 21.1873H30.1313C33.0023 21.1883 35.6543 22.7206 37.0893 25.2075C38.5238 27.6942 38.5228 30.7576 37.0865 33.2435C35.6503 35.7293 32.9969 37.2601 30.126 37.2591C29.9706 37.2591 29.8145 37.2511 29.6344 37.2422C29.3997 37.2338 29.1715 37.3183 28.9988 37.477C28.8261 37.636 28.7229 37.8565 28.7115 38.0907C28.7028 38.3286 28.7882 38.5602 28.9494 38.7353C29.1105 38.9104 29.3342 39.0148 29.5718 39.0259C29.7565 39.0349 29.9421 39.0439 30.126 39.0439C32.662 39.0588 35.1055 38.0917 36.9442 36.345C38.7831 34.5985 39.8745 32.2079 39.9898 29.6742C40.1052 27.1405 39.2355 24.661 37.5631 22.7545C35.8907 20.8478 33.5452 19.6627 31.0182 19.4472L31.0147 19.4497Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="ms-4">
                  <h4 className="fw-bold">Quick Quotes</h4>
                  <p>
                    Create a professional and user-friendly website that
                    reflects the brand's identity.
                  </p>
                </div>
              </div>
              <div className="d-flex my-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                >
                  <rect
                    width="55"
                    height="55.0002"
                    rx="27.5"
                    fill="currentColor"
                    fill-opacity="0.05"
                  ></rect>
                  <path
                    d="M22.9545 26.3638H18.4089C17.5048 26.3638 16.6377 26.0047 15.9984 25.365C15.3591 24.7257 15 23.8585 15 22.9545V18.4089C15 17.5048 15.3591 16.6377 15.9984 15.9984C16.6376 15.3591 17.5049 15 18.4089 15H22.9545C23.8585 15 24.7257 15.3591 25.365 15.9984C26.0047 16.6377 26.3638 17.5049 26.3638 18.4089V22.9545C26.3638 23.8585 26.0047 24.7257 25.365 25.365C24.7257 26.0047 23.8585 26.3638 22.9545 26.3638ZM18.4089 17.2726C17.7815 17.2726 17.2726 17.7815 17.2726 18.4089V22.9544C17.2726 23.2561 17.3923 23.545 17.6055 23.7582C17.8188 23.9711 18.1077 24.0907 18.4089 24.0907H22.9545C23.2561 24.0907 23.545 23.971 23.7583 23.7582C23.9711 23.545 24.0908 23.2561 24.0908 22.9544V18.4089C24.0908 18.1076 23.9711 17.8187 23.7583 17.6055C23.545 17.3923 23.2561 17.2726 22.9545 17.2726L18.4089 17.2726Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M22.9545 40.0002H18.4089C17.5048 40.0002 16.6377 39.6411 15.9984 39.0018C15.3591 38.3626 15 37.4953 15 36.5913V32.0457C15 31.1417 15.3591 30.2745 15.9984 29.6352C16.6377 28.9955 17.5049 28.6364 18.4089 28.6364H22.9545C23.8585 28.6364 24.7257 28.9955 25.365 29.6352C26.0047 30.2745 26.3638 31.1417 26.3638 32.0457V36.5913C26.3638 37.4954 26.0047 38.3625 25.365 39.0018C24.7257 39.6411 23.8585 40.0002 22.9545 40.0002ZM18.4089 30.9094C17.7815 30.9094 17.2726 31.4179 17.2726 32.0457V36.5913C17.2726 36.8925 17.3923 37.1814 17.6055 37.3947C17.8188 37.6079 18.1077 37.7276 18.4089 37.7276H22.9545C23.2561 37.7276 23.545 37.6079 23.7583 37.3947C23.9711 37.1814 24.0908 36.8925 24.0908 36.5913V32.0457C24.0908 31.7441 23.9711 31.4552 23.7583 31.2419C23.545 31.0291 23.2561 30.9094 22.9545 30.9094L18.4089 30.9094Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M36.5909 26.3638H32.0453C31.1412 26.3638 30.2741 26.0047 29.6348 25.365C28.9951 24.7257 28.636 23.8585 28.636 22.9545V18.4089C28.636 17.5048 28.9951 16.6377 29.6348 15.9984C30.274 15.3591 31.1413 15 32.0453 15H36.5909C37.4949 15 38.3621 15.3591 39.0014 15.9984C39.6407 16.6376 39.9997 17.5049 39.9997 18.4089V22.9545C39.9997 23.8585 39.6407 24.7257 39.0014 25.365C38.3621 26.0047 37.4949 26.3638 36.5909 26.3638V26.3638ZM32.0453 17.2726C31.4175 17.2726 30.909 17.7815 30.909 18.4089V22.9544C30.909 23.2561 31.0287 23.545 31.2415 23.7582C31.4548 23.9711 31.7437 24.0907 32.0453 24.0907H36.5909C36.8921 24.0907 37.181 23.971 37.3942 23.7582C37.6075 23.545 37.7272 23.2561 37.7272 22.9544V18.4089C37.7272 18.1076 37.6075 17.8187 37.3942 17.6055C37.181 17.3923 36.8921 17.2726 36.5909 17.2726L32.0453 17.2726Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M34.3181 40.0002C32.8112 40.0002 31.3662 39.4017 30.3004 38.336C29.2351 37.2707 28.6362 35.8253 28.6362 34.3184C28.6362 32.8114 29.2351 31.3664 30.3004 30.3007C31.3662 29.2353 32.8112 28.6365 34.3181 28.6365C35.825 28.6365 37.2704 29.2354 38.3358 30.3007C39.4015 31.3664 39.9999 32.8114 39.9999 34.3184C39.9999 35.8253 39.4015 37.2707 38.3358 38.336C37.2704 39.4018 35.825 40.0002 34.3181 40.0002ZM34.3181 30.909V30.9094C33.414 30.9094 32.5469 31.2685 31.9076 31.9078C31.2683 32.5471 30.9092 33.4143 30.9092 34.3183C30.9092 35.2224 31.2683 36.0895 31.9076 36.7288C32.5468 37.3685 33.4141 37.7276 34.3181 37.7276C35.2221 37.7276 36.0893 37.3685 36.7286 36.7288C37.3683 36.0896 37.7274 35.2223 37.7274 34.3183C37.7274 33.4143 37.3683 32.5471 36.7286 31.9078C36.0893 31.2685 35.2221 30.9094 34.3181 30.9094V30.909Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="ms-4">
                  <h4 className="fw-bold">Easy Application</h4>
                  <p>
                    Create a professional and user-friendly website that
                    reflects the brand's identity.
                  </p>
                </div>
              </div>
              <div className="d-flex my-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                >
                  <rect
                    width="55"
                    height="55"
                    rx="27.5"
                    fill="#2A68A0"
                    fill-opacity="0.05"
                  ></rect>
                  <path
                    d="M38.0002 16.111H30.2224C29.6945 15.4166 28.8891 15 28.0001 15C27.1111 15 26.3056 15.4166 25.7778 16.111H18.5555C18.2499 16.111 18 16.361 18 16.6665V39.4445C18 39.7501 18.25 40 18.5555 40H38.0001C38.3057 40 38.5556 39.75 38.5556 39.4445V16.6665C38.5556 16.361 38.3057 16.1108 38.0001 16.1108L38.0002 16.111ZM23.8334 17.2222H26.0834C26.2779 17.2222 26.4723 17.1112 26.5556 16.9444C26.8612 16.4165 27.4167 16.111 28.0001 16.111C28.5835 16.111 29.1391 16.4166 29.4446 16.9444C29.5556 17.111 29.7225 17.2222 29.9168 17.2222H32.1668V18.889L23.8334 18.8888L23.8334 17.2222ZM23.2779 20H32.7224C33.028 20 33.2779 19.7501 33.2779 19.4445V18.889H35.7779V33.8891H33.0003C32.6947 33.8891 32.4448 34.1391 32.4448 34.4446V37.2224H20.778V18.889H22.7224V19.4445C22.7224 19.7502 22.9724 20.0002 23.2779 20.0002V20ZM35.0002 35.0002L33.5557 36.4447V35.0002H35.0002ZM37.4447 38.8892H19.1113V17.2223H22.7225V17.7778H20.2225C19.917 17.7778 19.667 18.0278 19.667 18.3334V37.778C19.667 38.0835 19.917 38.3335 20.2225 38.3335H33.0004C33.1393 38.3335 33.2783 38.2779 33.3893 38.1668L36.7226 34.8335C36.8336 34.7225 36.8892 34.5836 36.8892 34.4446V18.3334C36.8892 18.0278 36.6393 17.7779 36.3337 17.7779H33.2781V17.2224H37.4448L37.4447 38.8892ZM28.0002 33.6114C31.2225 33.6114 33.8336 31.0002 33.8336 27.778C33.8336 24.5557 31.2224 21.9446 28.0002 21.9446C24.7779 21.9446 22.1668 24.5558 22.1668 27.778C22.167 31.0003 24.7782 33.6114 28.0002 33.6114ZM28.0002 23.0557C30.6114 23.0557 32.7224 25.1668 32.7224 27.7779C32.7224 30.3891 30.6114 32.5001 28.0002 32.5001C25.389 32.5001 23.278 30.3891 23.278 27.7779C23.278 25.1669 25.3892 23.0557 28.0002 23.0557ZM24.8615 28.3613C24.6392 28.1391 24.6392 27.7779 24.8615 27.5835C25.0837 27.3613 25.417 27.3613 25.6392 27.5835L27.2227 29.167L30.3617 26.028C30.5839 25.8058 30.9172 25.8058 31.1394 26.028C31.3617 26.2503 31.3617 26.5835 31.1394 26.8058L27.6114 30.3058C27.5004 30.4168 27.3614 30.4724 27.2225 30.4724C27.0836 30.4724 26.9446 30.4168 26.8336 30.3058L24.8615 28.3613Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="ms-4">
                  <h4 className="fw-bold">Fast Approval</h4>
                  <p>
                    Create a professional and user-friendly website that
                    reflects the brand's identity.
                  </p>
                </div>
              </div>
              <Button />
            </div>
          </div>
        </div>
      </div>
      <PriceCard />
      <ImproveCard />
      <TeamCard />
      <div className="contact-section">
        <div className="container px-4">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 col-12">
              <div class="card">
                <div class="card-body text-center">
                  <div className="icon my-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="44"
                      viewBox="0 0 54 44"
                      fill="none"
                    >
                      <path
                        d="M0 9.0625V41.5C0 42.625 1.03125 43.375 1.96875 42.9062L15 37V1L1.875 6.25C0.75 6.71875 0 7.84375 0 9.0625ZM18 37L36 43V7L18 1V37ZM51.9375 1.1875L39 7V43L52.0312 37.8438C53.1562 37.375 54 36.25 54 35.0312V2.59375C54 1.46875 52.875 0.71875 51.9375 1.1875Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <h3 class="card-title my-4">Office</h3>
                  <h6 class="card-subtitle mb-4 text-muted">
                    Baneshwor, Kathmandu <br />
                    Nepal
                  </h6>
                  <h6 class="card-subtitle my-4 text-muted">On Map</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div class="card">
                <div class="card-body text-center">
                  <div className="icon my-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="36"
                      viewBox="0 0 48 36"
                      fill="none"
                    >
                      <path
                        d="M47.0625 11.9062C44.9062 13.5938 42.1875 15.6562 32.625 22.5938C30.75 24 27.2812 27.0938 24 27.0938C20.625 27.0938 17.25 24 15.2812 22.5938C5.71875 15.6562 3 13.5938 0.84375 11.9062C0.46875 11.625 0 11.9062 0 12.375V31.5C0 34.0312 1.96875 36 4.5 36H43.5C45.9375 36 48 34.0312 48 31.5V12.375C48 11.9062 47.4375 11.625 47.0625 11.9062ZM24 24C26.1562 24.0938 29.25 21.2812 30.8438 20.1562C43.3125 11.1562 44.25 10.3125 47.0625 8.0625C47.625 7.6875 48 7.03125 48 6.28125V4.5C48 2.0625 45.9375 0 43.5 0H4.5C1.96875 0 0 2.0625 0 4.5V6.28125C0 7.03125 0.28125 7.6875 0.84375 8.0625C3.65625 10.3125 4.59375 11.1562 17.0625 20.1562C18.6562 21.2812 21.75 24.0938 24 24Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <h3 class="card-title my-4">Mail</h3>
                  <h6 class="card-subtitle mb-4 text-muted">
                    support@creatt.com <br />
                    help@creatt.com
                  </h6>
                  <h6 class="card-subtitle my-4 text-muted">Send us Email</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div class="card">
                <div class="card-body text-center">
                  <div className="icon my-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="49"
                      height="42"
                      viewBox="0 0 49 42"
                      fill="none"
                    >
                      <path
                        d="M25 0C11.6875 0 1 8.8125 1 19.5C1 24.1875 2.96875 28.4062 6.34375 31.7812C5.125 36.5625 1.1875 40.6875 1.1875 40.7812C1 40.9688 0.90625 41.3438 1 41.625C1.1875 41.9062 1.375 42 1.75 42C7.9375 42 12.625 39.0938 14.875 37.2188C17.9688 38.3438 21.3438 39 25 39C38.2188 39 49 30.2812 49 19.5C49 8.8125 38.2188 0 25 0ZM13 22.5C11.3125 22.5 10 21.1875 10 19.5C10 17.9062 11.3125 16.5 13 16.5C14.5938 16.5 16 17.9062 16 19.5C16 21.1875 14.5938 22.5 13 22.5ZM25 22.5C23.3125 22.5 22 21.1875 22 19.5C22 17.9062 23.3125 16.5 25 16.5C26.5938 16.5 28 17.9062 28 19.5C28 21.1875 26.5938 22.5 25 22.5ZM37 22.5C35.3125 22.5 34 21.1875 34 19.5C34 17.9062 35.3125 16.5 37 16.5C38.5938 16.5 40 17.9062 40 19.5C40 21.1875 38.5938 22.5 37 22.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <h3 class="card-title my-4">Live Support</h3>
                  <h6 class="card-subtitle mb-4 text-muted">
                    +977-9874563210
                    <br />
                    +977-9845613789
                  </h6>
                  <h6 class="card-subtitle my-4 text-muted">Connect with us</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frequent-question">
        <div className="cards-design">
          <div className="container px-4 mx-auto">
            <div className="text-center py-4 ">
              <h2 className="fw-bold fs-1">Frequently Asked Questions</h2>
              <p>
                A company that specializes in providing a range of digital
                marketing and advertising services to clients
              </p>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-10 col-12 mx-auto">
                <div class="accordion" id="accordionPanelsStayOpenExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        How can I get a Refund
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div class="accordion-body">
                        A company that specializes in providing a range of
                        digital marketing and advertising services to clients.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        Can I use this Design Set on Client sites?
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTwo"
                    >
                      <div class="accordion-body">
                        A company that specializes in providing a range of
                        digital marketing and advertising services to clients.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        How long is the license valid?
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div class="accordion-body">
                        A company that specializes in providing a range of
                        digital marketing and advertising services to clients.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
