import React from "react";

function Contact() {
  return (
    <div>
      <section id="contact" className="container py-5">
      <h2 className="mb-4">Contact Me</h2>
      <form
      // go to formspree to customize
        action="https://formspree.io/f/xvgbpkeq" // <- replace with your endpoint
        method="POST"
        className="row g-3"
      >
        <div className="col-md-6">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="col-12">
          <textarea
            name="message"
            className="form-control"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </form>
    </section>
    </div>
  );
}

export default Contact;
