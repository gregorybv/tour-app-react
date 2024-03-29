import React from "react"
import "./choice.css"
import card_1 from "../../../assetts/image/block_2/photo-1.png"
import card_2 from "../../../assetts/image/block_2/photo-2.png"
import card_3 from "../../../assetts/image/block_2/photo-3.png"
import card_4 from "../../../assetts/image/block_2/photo-4.png"
import card_5 from "../../../assetts/image/block_2/photo-5.png"
import card_6 from "../../../assetts/image/block_2/photo-6.png"
import ChoiceOptions from "../../Reused/ChoiseOptions/ChoiceOptions"
import ChoiceBtn from "../../Reused/ChoiseBtn/ChoiceBtn"
import ChoiceMenu from "../../Reused/ChoiseMenu/ChoiceMenu"

const Choice = () => {
  return (
    <section id='choice' className='choice container'>
      <div className='choice__body' data-aos='zoom-in' data-aos-duration='1500'>
        <h2 className='title-h2'>Выбери свой тур</h2>
        <ChoiceMenu />
      </div>
      <ul className='choice__photo'>
        <li className='choice__item'>
          <ChoiceOptions />
          <ChoiceBtn />
          <img className='choice__image' src={card_1} alt='Painting' />
        </li>
        <li className='choice__item'>
          <ChoiceOptions />
          <ChoiceBtn />
          <img className='choice__image' src={card_2} alt='Painting' />
        </li>
        <li className='choice__item'>
          <ChoiceOptions />
          <ChoiceBtn />
          <img className='choice__image' src={card_3} alt='Painting' />
        </li>
        <li className='choice__item'>
          <ChoiceOptions />
          <ChoiceBtn />
          <img className='choice__image' src={card_4} alt='Painting' />
        </li>
        <li className='choice__item'>
          <ChoiceOptions />
          <ChoiceBtn />
          <img className='choice__image' src={card_5} alt='Painting' />
        </li>
        <li className='choice__item'>
          <ChoiceOptions />
          <ChoiceBtn />
          <img className='choice__image' src={card_6} alt='Painting' />
        </li>
      </ul>
    </section>
  )
}

export default Choice
