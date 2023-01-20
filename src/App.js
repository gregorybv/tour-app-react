import {useEffect} from "react";
import Aos from 'aos'

import './App.css';
import Header from "./components/Header/Header";
import Choice from "./components/Blocks/Choise/Choice";
import Tour from "./components/Blocks/Tour/Tour";
import Review from "./components/Blocks/Review/Review";
import Gallery from "./components/Blocks/Gallery/Gallery";
import Story from "./components/Blocks/Story/Story";
import Travel from "./components/Blocks/Travel/Travel";
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
