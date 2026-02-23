import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import './Homepage.css';
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
