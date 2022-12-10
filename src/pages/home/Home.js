import React from "react";
import Banner from "../../components/banner/Banner";
import Contact from "../../components/contact/Contact";
import Projects from "../../components/projects/Projects";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
