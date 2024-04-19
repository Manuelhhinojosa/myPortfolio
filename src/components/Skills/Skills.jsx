import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.skillsTitle}>Skills</div>
      <div className={styles.SkillsList}>
        MongoDB, Mongoose, Atlas MongoDB, Express, React, NodeJS, HTML, CSS,
        Javascript, Typescript, SASS, public API, EmailJS, Heroku, Netlify,
        Socket.IO, Cloudinary, GitHub, Git, Terminal, NPM
      </div>
    </div>
  );
};

export default Skills;
