import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="bg-white">
      <section className="container py-5 contact--">
      <div>
        <h3>Contact me</h3>
      </div>
      <form action="submit">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        ></input>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-outline-secondary">Send</button>
      <button type="button" className="btn btn-outline-secondary ms-3">Clear</button>

      </form>
    </section>
    </div>
  );
};

export default Contact;
