import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.skillsTitle}>Skills</div>
      <div className={styles.SkillsList}>
        MongoDB, Mongoose, MongoDB's Atlas, Express, React, NodeJS, Redux, HTML,
        CSS, Javascript, SASS, REST API, EmailJS, Heroku, Netlify, Vercel,
        Cloudinary, GitHub, Git, Terminal, NPM, Bcrypt Encryption, Stripe,
        Socket.IO, AI Technologies.
      </div>
    </div>
  );
};

export default Skills;
