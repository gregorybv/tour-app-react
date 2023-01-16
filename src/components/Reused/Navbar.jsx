import React from 'react';
import logo from "../../assetts/image/header/YourTour.svg";
import '../../styles/reused/navbar.css'

const nav__links = [
  {
    path: '#',
    display: 'Туры'
  },
  {
    path: '#',
    display: 'Создать тур'
  },
  {
    path: '#',
    display: 'Отзывы'
  },
  {
    path: '#',
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
      />
      <div className="header__menu">
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
      >+7 999 999 99 99</a>
    </nav>
  )
}

export default Navbar



