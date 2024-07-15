import React from "react";
import { Zoom } from "react-awesome-reveal";

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact p-3">
        <Zoom>
          <div className="container mx-auto px-4" data-aos="fade-up">
            <div className="section-title text-center">
              <h2 className="titlefont">Contact</h2>
              <p className="mt-4 font-semibold">
                Welcome to our contact page! We value your feedback, inquiries,
                and suggestions. Whether you have a question about our products or
                services, need technical support, or want to share your thoughts
                with us, we're here to listen.
              </p>
            </div>
            <div className="row mt-5 flex flex-wrap">
              <div className="col-lg-4 w-full lg:w-1/3">
                <div className="info">
                  <div className="address mb-4">
                    <i className="fa-solid fa-location-dot text-xl"></i>
                    <h4 className="font-semibold mt-2">Location:</h4>
                    <p>Kautha Newasa Ahmednagar 414606</p>
                  </div>
                  <div className="email mb-4">
                    <i className="fa-solid fa-envelope text-xl"></i>
                    <h4 className="font-semibold mt-2">Email:</h4>
                    <p>pbkale25@gmail.com</p>
                  </div>
                  <div className="phone mb-4">
                    <i className="fa-solid fa-phone text-xl"></i>
                    <h4 className="font-semibold mt-2">Call:</h4>
                    <p>+91 9021373247</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 mt-5 mt-lg-0 w-full lg:w-2/3">
                <form method="post" className="php-email-form">
                  <div className="row flex flex-wrap -mx-2">
                    <div className="col-md-6 w-full md:w-1/2 px-2 mb-4 md:mb-0">
                      <input
                        type="text"
                        name="name"
                        className="form-control bg-transparent border border-gray-300 p-2 w-full"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 w-full md:w-1/2 px-2">
                      <input
                        type="email"
                        className="form-control bg-transparent border border-gray-300 p-2 w-full"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <input
                      type="text"
                      className="form-control bg-transparent border border-gray-300 p-2 w-full"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group mt-4">
                    <textarea
                      className="form-control bg-transparent border border-gray-300 p-2 w-full"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn bg-blue-500 text-white py-2 px-4 rounded mt-4">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Zoom>
      </section>
    </>
  );
};

export default Contact;
