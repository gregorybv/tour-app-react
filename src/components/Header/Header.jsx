import React from 'react';
import '../../styles/header.css'
import logo from '../../assetts/image/header/YourTour.svg'
import fon from '../../assetts/image/block_1/header-img.jpg'

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__hat">
          <img
            className="header__logo"
            src={logo}
            alt="YourTour"
          />
          <nav className="header__menu">
            <ul className="header__list">
              <li>
                <a href="#" className="header__link"
                >Туры</a
                >
              </li>
              <li>
                <a href="#" className="header__link"
                >Создать тур</a
                >
              </li>
              <li>
                <a href="#" className="header__link"
                >Отзывы</a
                >
              </li>
              <li>
                <a href="#" className="header__link"
                >Истории</a
                >
              </li>
            </ul>
          </nav>
          <a href="tel:+7 999 999 99 99" className="header__link"
          >+7 999 999 99 99</a
          >
        </div>
        <div className="header__main">
          <h1 className="header__title">
            Идеальные путешествия существуют
          </h1>
          <p className="header__subtitle">
            Идейные соображения высшего порядка, а также рамки и
            место обучения кадров
          </p>
          <button type="button" className="header__button">
            Найти тур
          </button>
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












