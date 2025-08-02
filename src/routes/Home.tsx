import HeroSection from "../features/Home/HeroSection/HeroSection";
import styles from "./Home.module.css";
import Header from "../components/Header/Header";
import ExploreButton from "../features/Home/ExploreButton/ExploreButton";

function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <HeroSection />
        <ExploreButton />
      </div>
    </div>
  );
}

export default Home;
