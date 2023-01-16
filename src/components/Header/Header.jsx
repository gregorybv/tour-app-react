import React from 'react';
import '../../styles/header.css'
import fon from '../../assetts/image/block_1/header-img.jpg'
import Navbar from "../Reused/Navbar";
import HeaderBtn from "../Reused/HeaderBtn";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Navbar/>
        <div className="header__main">
          <h1 className="header__title">
            Идеальные путешествия существуют
          </h1>
          <p className="header__subtitle">
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












