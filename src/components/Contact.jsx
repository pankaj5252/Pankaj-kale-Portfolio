import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact p-3">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center">
            <h2 className="titlefont">Contact</h2>
            <p>
              Welcome to our contact page! We value your feedback, inquiries,
              and suggestions. Whether you have a question about our products or
              services, need technical support, or want to share your thoughts
              with us, we're here to listen.
            </p>
          </div>
          <div></div>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                <i class="fa-solid fa-location-dot"></i>
                  <h4>Location:</h4>
                  <p>Kautha Newasa Ahmednagar 414606</p>
                </div>
                <div className="email">
                <i class="fa-solid fa-envelope"></i>
                  <h4>Email:</h4>
                  <p>pbkale25@gamil.com</p>
                </div>
                <div className="phone">
                <i class="fa-solid fa-phone"></i>
                  <h4>Call:</h4>
                  <p>+91 9021373247</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
              <form method="post" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control bg-transparent"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control bg-transparent"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control bg-transparent"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control bg-transparent"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-about mt-0">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
