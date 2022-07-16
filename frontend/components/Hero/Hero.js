import React from "react";
import styles from "../../styles/Hero.module.css";

const Hero = () => (
  <>
    <video className={styles.video} autoPlay muted loop>
      <source
        src="https://storage.googleapis.com/coverr-main/mp4%2FOne-Swan.mp4"
        type="video/mp4"
      />
    </video>
    <h2 className={styles.videoHeader}>David Keimig</h2>
    <h2 id="h2">David Keimig</h2>
  </>
);

export default Hero;
