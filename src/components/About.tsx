import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
        Hi, I’m Parikshit Chavhan,
        an Android developer passionate about crafting polished,
        user-centric mobile apps. My journey started with Java,
        where I honed my skills in native Android development,
        and evolved into embracing Kotlin and Flutter to build
        modern, efficient, and cross-platform solutions. 
        I specialize in transforming complex ideas into intuitive apps, 
        prioritizing clean architecture, seamless UI/UX with Jetpack Compose, 
        and performance optimization. From migrating legacy codebases to Kotlin 
        and collaborating with designers to bridge Figma prototypes into functional apps, 
        to integrating Firebase for robust backend support, 
        I thrive on solving real-world problems through code.
        </p>
      </div>
    </div>
  );
};

export default About;
