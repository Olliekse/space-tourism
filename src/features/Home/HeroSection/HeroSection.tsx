import styles from "./HeroSection.module.css";
function HeroSection() {
  return (
    <div className={styles.textContainer}>
      <p className={styles.subtitle}>so, you want to travel to</p>
      <h1 className={styles.title}>space</h1>
      <p className={styles.text}>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
  );
}

export default HeroSection;
