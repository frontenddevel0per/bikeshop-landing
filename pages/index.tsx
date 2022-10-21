import type { NextPage } from "next";
import Header from "../components/header/header.component";
import Showcase from "../components/showcase/showcase.component";

const Home: NextPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <Showcase />
    </div>
  );
};

export default Home;
