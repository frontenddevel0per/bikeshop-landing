import type { NextPage } from "next";
import AppSection from "../components/app-section/app-section.component";
import Features from "../components/features/features.component";
import Header from "../components/header/header.component";
import Overview from "../components/overview/overview.component";
import Showcase from "../components/showcase/showcase.component";
import Reviews from "../components/reviews/reviews.component";

const Home: NextPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <Showcase />
      <Overview />
      <Features />
      <AppSection />
      <Reviews />
    </div>
  );
};

export default Home;
