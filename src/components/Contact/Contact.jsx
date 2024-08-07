import styles from "./Contact.module.css";

import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import Github from "../../img/github2.webp";
import In from "../../img/in.png";
import Cv from "../../img/cv.png";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const useFormRef = useRef(null);
  const userNameRef = useRef(null);
  const userSubjectRef = useRef(null);
  const userEmailRef = useRef(null);
  const userMessageRef = useRef(null);

  const [sent, setSent] = useState(false);

  const getUserData = (e) => {
    e.preventDefault();
    if (
      userNameRef.current.value === "" ||
      userSubjectRef.current.value === "" ||
      userEmailRef.current.value === "" ||
      userMessageRef.current.value === ""
    ) {
      userNameRef.current.focus();
      return;
    }

    emailjs
      .sendForm(
        "service_uwmyri8", // service ID
        "template_81ytf6s", // template ID
        useFormRef.current,
        "Btd79Gvtg2pvWbjSm" // key
      )
      .then(
        (result) => {
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    userNameRef.current.value = "";
    userSubjectRef.current.value = "";
    userEmailRef.current.value = "";
    userMessageRef.current.value = "";
    userNameRef.current.focus();
  };

  const handleSent = () => {
    setSent(false);
    userNameRef.current.focus();
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contactWrapper}>
        <div className={styles.contactLeft}>
          <h1 className={styles.contactTitle}>Let's discuss your project.</h1>
          <div className={styles.contactInfo}>
            <div className={styles.contactInfoItem}>
              <img className={styles.contactIcon} src={Address} alt="address" />
              Toronto, ON. Canada
            </div>

            <div className={styles.contactInfoItem}>
              <img className={styles.contactIcon} src={Phone} alt="phone" />
              +1. 647.287.4494
            </div>

            <div className={styles.contactInfoItem}>
              <img className={styles.contactIcon} src={Email} alt="email" />
              mangud.hinojosa@gmail.com
            </div>

            <div className={styles.contactInfoItem}>
              <a
                href="https://manuelhhcv.netlify.app/cv.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <img className={styles.contactIcon} src={Cv} alt="cv" />
              </a>
              CV
            </div>

            <div className={styles.contactInfoItem}>
              <a
                href="https://github.com/Manuelhhinojosa"
                target="_blank"
                rel="noreferrer"
              >
                <img className={styles.contactIcon} src={Github} alt="github" />
              </a>
              gitHub
            </div>

            <div className={styles.contactInfoItem}>
              <a
                href="https://www.linkedin.com/in/manuelhh/"
                target="_blank"
                rel="noreferrer"
              >
                <img className={styles.contactIcon} src={In} alt="in" />
              </a>
              linkedin
            </div>
          </div>
        </div>
        <div className={styles.contactRight}>
          <p className={styles.contactDescription}>
            <b>What's your story?</b> Get in touch. Always freelancing if the
            right project comes along
          </p>
          <form action="" className={styles.contactForm} ref={useFormRef}>
            <input
              type="text"
              placeholder="Name"
              name="userName"
              ref={userNameRef}
              autocomplete="off"
            />
            <input
              type="text"
              placeholder="Subject"
              name="userSubject"
              ref={userSubjectRef}
              autocomplete="off"
            />
            <input
              type="text"
              placeholder="Email"
              name="userEmail"
              ref={userEmailRef}
              autocomplete="off"
            />
            <textarea
              name="userMessage"
              rows="5"
              placeholder="Message"
              ref={userMessageRef}
            ></textarea>
            <button onClick={getUserData}>Submit</button>
            {sent ? (
              <p className={styles.thanksMessage}>
                Thank you. You will hear from me shortly.{" "}
                <span onClick={() => handleSent(false)}>close message</span>
              </p>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
