import React from 'react';
import logo from "../../assetts/image/header/YourTour.svg";
import '../../styles/reused/navbar.css'

const nav__links = [
  {
    path: '#choice',
    display: 'Туры'
  },
  {
    path: '#tour',
    display: 'Создать тур'
  },
  {
    path: '#review',
    display: 'Отзывы'
  },
  {
    path: '#stories',
    display: 'Истории'
  },
]

const Navbar = () => {
  return (
    <nav className="header__hat">
      <img
        className="header__logo"
        src={logo}
        alt="YourTour"
        data-aos="fade-right"
        data-aos-duration="1500"
      />
      <div className="header__menu"
           data-aos="fade-down"
           data-aos-duration="1500"
      >
        <ul className="header__list">
          {
            nav__links.map(item => (
              <li className="header__link">
                <a className="header__reference" href={item.path}>{item.display}</a>
              </li>
            ))
          }
        </ul>
      </div>
      <a href="tel:+7 999 999 99 99" className="header__link"
         data-aos="fade-left"
         data-aos-duration="1500"
      >+7 999 999 99 99</a>
    </nav>
  )
}

export default Navbar



