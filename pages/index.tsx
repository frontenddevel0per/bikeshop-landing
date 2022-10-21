import type { NextPage } from "next";
import Header from "../components/header/header.component";
import Overview from "../components/overview/overview.component";
import Showcase from "../components/showcase/showcase.component";

const Home: NextPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <Showcase />
      <Overview />
    </div>
  );
};

export default Home;
