import {useEffect} from "react";
import Aos from 'aos'

import './App.css';
import Header from "./components/Header/Header";
import Choice from "./components/UI/Choice";
import Tour from "./components/UI/Tour";
import Review from "./components/UI/Review";
import Gallery from "./components/UI/Gallery";
import Story from "./components/UI/Story";
import Travel from "./components/UI/Travel";
import Footer from "./components/Footer/Footer";

function App() {

  useEffect(() => {
    Aos.init()
  }, []);

  return (
    <>
      <Header/>
      <Choice/>
      <Tour/>
      <Review/>
      <Gallery/>
      <Story/>
      <Travel/>
      <Footer/>
    </>
  );
}

export default App;
