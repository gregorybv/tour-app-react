import React from "react"
import "./travel.css"
import travel from "../../../assetts/image/block_7/footer photo.jpg"

const Travel = () => {
  return (
    <section
      className='travel container'
      data-aos='zoom-in'
      data-aos-duration='1500'
    >
      <div className='travel__contents'>
        <img className='travel__img' src={travel} alt='footer photo' />
        <div className='travel__content'>
          <h3 className='travel__title'>Пора в путешествие вместе с нами!</h3>
          <p className='travel__subtitle'>
            Напиши на почту и узнай подробности на
            <a href='mailto:yourtour@gmail.com' className='travel__link'>
              {" "}
              yourtour@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Travel
