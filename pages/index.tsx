import type { NextPage } from "next";
import Features from "../components/features/features.component";
import Header from "../components/header/header.component";
import Overview from "../components/overview/overview.component";
import Showcase from "../components/showcase/showcase.component";

const Home: NextPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <Showcase />
      <Overview />
      <Features />
    </div>
  );
};

export default Home;
