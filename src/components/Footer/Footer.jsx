import React from "react"
import "./footer.css"
import insta from "../../assetts/image/footer/Insta.svg"
import fb from "../../assetts/image/footer/FB.svg"
import vk from "../../assetts/image/footer/VK.svg"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <p className='footer__title'>Наши социальные сети</p>
        <nav className='footer__networks'>
          <ul className='footer__item'>
            <li>
              <a href='#' className='footer__link'>
                <img src={insta} alt='Insta' />
                instagram
              </a>
            </li>
          </ul>
          <ul className='footer__item'>
            <li>
              <a href='#' className='footer__link'>
                <img src={fb} alt='FB' />
                facebook
              </a>
            </li>
          </ul>
          <ul className='footer__item'>
            <li>
              <a href='#' className='footer__link'>
                <img src={vk} alt='VK' />
                vkontakte
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
