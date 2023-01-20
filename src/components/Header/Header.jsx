import React from 'react';
import './header.css'
import fon from '../../assetts/image/block_1/header-img.jpg'
import Navbar from "../Reused/Navbar/Navbar";
import HeaderBtn from "../Reused/HeaderBtn/HeaderBtn";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Navbar/>
        <div className="header__main">
          <h1 className="header__title"
              data-aos="fade-up"
              data-aos-duration="1500"
          >
            Идеальные путешествия существуют
          </h1>
          <p className="header__subtitle"
             data-aos="fade-up"
             data-aos-duration="1500"
          >
            Идейные соображения высшего порядка, а также рамки и
            место обучения кадров
          </p>
          <HeaderBtn/>
        </div>
      </div>
      <img
        className="header__img"
        src={fon}
        alt="Fon"
      />
    </header>
  )
}

export default Header












