import React from "react";
import "../../public/css/component-css/Footer.css";
export default function Footer({ importerClassName }) {
  const contactClassName = `contact-us${
    importerClassName ? ` ${importerClassName}` : ""
  }`;
  const contactInfoClassName = `contact-info${
    importerClassName ? ` ${importerClassName}` : ""
  }`;

  return (
    <div className="footer-container">
      <section className={contactClassName} id="contact">
        <h1>Do not hesitate reaching out!</h1>
        <form method="post" className="form-contact">
          <div className="contact-form">
            <div className="name">
              <input
                type="text"
                placeholder="Full name"
                name="contactname"
                id="contact-name"
                className="contact-box"
                required
              />
            </div>
            <div className="mail">
              <input
                type="email"
                placeholder="Mail"
                name="contactmail"
                id="contact-mail"
                className="contact-box"
                required
              />
            </div>
            <div className="number">
              <input
                type="text"
                placeholder="Number"
                name="contactnumber"
                id="contact-number"
                className="contact-box"
                required
              />
            </div>
            <div className="message">
              <textarea
                placeholder="Message"
                name="contactmessage"
                id="contact-message"
                className="contact-box-big"
                required
              ></textarea>
            </div>
            <div className="send">
              <input type="submit" value="Send" className="contact-submit" />
            </div>
          </div>
        </form>
      </section>
      <div id="contact-info-details">
        <p>+46 70 123 45 67</p>
        <p className="contact-spacer">|</p>
        <p>Linus.archibald@gmail.com</p>
        <p className="contact-spacer">|</p>
        <p>Margritenweg 5 6390 engelberg</p>
      </div>
      <div className="copyright">
        <span className="copyright-text">
          Copyright Ⓒ 2024 Linus Archibald All rights reserved
        </span>
      </div>
    </div>
  );
}
