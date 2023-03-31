import React, { useLayoutEffect, useRef } from "react"
import logo from "../../../assetts/image/header/YourTour.svg"
import "./navbar.css"

const nav__links = [
  {
    path: "#choice",
    display: "Туры",
  },
  {
    path: "#tour",
    display: "Создать тур",
  },
  {
    path: "#review",
    display: "Отзывы",
  },
  {
    path: "#stories",
    display: "Истории",
  },
]

const Navbar = () => {
  const stickyHeader = useRef()
  useLayoutEffect(() => {
    const headerLogo = document.getElementById("headerLogo")
    const headerList = document.getElementById("headerList")
    const headerPhone = document.getElementById("headerPhone")
    const headerHat = document.getElementById("headerHat")
    let fixedTop = stickyHeader.current.offsetTop
    const fixedHeader = () => {
      if (window.pageYOffset > fixedTop) {
        headerLogo.classList.add("fixedTop")
        headerList.classList.add("fixedTop")
        headerPhone.classList.add("fixedTop")
        headerHat.classList.add("header__hat_scroll")
      } else {
        headerLogo.classList.remove("fixedTop")
        headerList.classList.remove("fixedTop")
        headerPhone.classList.remove("fixedTop")
        headerHat.classList.remove("header__hat_scroll")
      }
    }
    window.addEventListener("scroll", fixedHeader)
  }, [])

  return (
    <nav className='header__hat' id='headerHat' ref={stickyHeader}>
      <img
        className='header__logo'
        src={logo}
        alt='YourTour'
        id='headerLogo'
        ref={stickyHeader}
      />
      <div className='header__menu'>
        <ul className='header__list' id='headerList' ref={stickyHeader}>
          {nav__links.map((item) => (
            <li className='header__link' key={item.id}>
              <a className='header__reference' href={item.path}>
                {item.display}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <a
        href='tel:+7 999 999 99 99'
        className='header__link'
        id='headerPhone'
        ref={stickyHeader}
      >
        +7 999 999 99 99
      </a>
    </nav>
  )
}

export default Navbar
