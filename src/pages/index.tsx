import type { NextPage } from "next";
import RatingCard from "../component/RatingCard";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <main className={styles.container}>
      <RatingCard />
    </main>
  );
};

export default Home;
