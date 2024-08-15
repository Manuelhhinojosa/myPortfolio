import styles from "./About.module.css";
import AboutMe from "../../img/about.jpeg";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutLeftContainer}>
        <div className={styles.aboutTextContainer}>
          <div className={styles.aboutTextTitle}>
            General Assembly Software Engineer grad.
          </div>
          <div className={styles.aboutTextScript}>
            With a passion for technology and a drive for innovation, I
            transitioned from a successful career in culinary management and
            event planning to become a Full Stack Software Engineer.
            <br />
            <br />
            My background in gastronomy and event planning has given me a unique
            approach to web development, allowing me to infuse creativity,
            meticulous attention to detail, and a user-centered mindset into
            every project I undertake.
            <br />
            <br />I have hands-on experience in building and deploying dynamic,
            responsive web applications using the MERN stack, and I thrive on
            solving complex problems and delivering elegant, scalable solutions.
            My journey from crafting memorable experiences in the culinary world
            to developing impactful digital experiences has equipped me with a
            fresh perspective, blending technical expertise with a deep
            understanding of client needs and project management. Whether I'm
            building a seamless user interface or engineering a robust backend,
            my goal is to create meaningful and efficient digital solutions that
            leave a lasting impression.
          </div>
        </div>
      </div>
      <div className={styles.aboutRightContainer}>
        <div className={styles.aboutImageContainer}>
          <img
            src={AboutMe}
            alt="About me image"
            className={styles.aboutImage}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
