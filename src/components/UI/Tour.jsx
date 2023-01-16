import React from 'react';
import '../../styles/tour.css'
import TourBtn from "../Reused/TourBtn";

const Tour = () => {
  return (
    <section id='tour' className="tour container">
      <div className="tour__hat"
           data-aos="zoom-in"
           data-aos-duration="1500"
      >
        <h2 className="tour__title title-h2">Собери свой тур</h2>
        <p className="tour__subtitle subtitle">
          Идейные соображения высшего порядка, а также рамки и
          место обучения кадров
        </p>
      </div>
      <div className="tour__forms">
        <form name="form" className="tour__form" action="#">
          <div className="tour__column">
            <div className="tour__item">
              <label className="tour__label">
                Имя
                <input
                  type="text"
                  placeholder="Введите Ваше имя"
                  className="tour__input"
                />
              </label>
            </div>
            <div className="tour__item">
              <label className="tour__label"
              >Направление
                <select className="tour__input">
                  <option
                    value="Куда хотите ехать"
                    className="tour__input"
                  >
                    Куда хотите ехать
                  </option>
                  <option
                    value="Туда"
                    className="tour__input"
                  >
                    Туда
                  </option>
                  <option
                    value="Сюда"
                    className="tour__input"
                  >
                    Сюда
                  </option>
                  <option
                    value="Отсюда"
                    className="tour__input"
                  >
                    Отсюда
                  </option>
                </select>
              </label>
            </div>
          </div>
          <div className="tour__column">
            <div className="tour__item">
              <label className="tour__label">
                Email
                <input
                  type="email"
                  className="tour__input"
                  placeholder="example@mail.com"
                  required
                />
              </label>
            </div>
            <div className="tour__item">
              <label className="tour__label">
                Телефон
                <input
                  type="tel"
                  name="tel"
                  className="tour__input"
                  placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
                  required
                  id="tel"
                  minLength="6"
                  maxLength="12"
                />
              </label>
            </div>
          </div>
          <div className="tour__column">
            <div className="tour__item">
              <label className="tour__label">
                Дата от
                <input
                  type="text"
                  className="tour__input"
                  placeholder="ДД.ММ.ГГГГ"
                  required
                />
              </label>
            </div>
            <div className="tour__item">
              <label className="tour__label">
                Дата до
                <input
                  type="text"
                  className="tour__input"
                  placeholder="ДД.ММ.ГГГГ"
                  required
                />
              </label>
            </div>
          </div>
          <div className="tour__comments">
            <label className="tour__label"
            >Комментарий
              <textarea
                className="tour__comment"
                name=""
                id=""
                cols="133"
                rows="7"
              ></textarea>
            </label>
          </div>
          <div className="tour__age">
            <label className="tour__label"
            >Вам есть 18 лет?</label
            >
            <div className="tour__radios">
              <div className="tour__radio">
                <label className="tour__labels">
                  Да
                  <input
                    type="radio"
                    className="tour__hiding"
                    name="tour__radio"
                    value="yes"
                  />
                  <span className="tour__span"></span>
                </label>
              </div>
              <div className="tour__radio">
                <label className="tour__labels">
                  Нет
                  <input
                    type="radio"
                    className="tour__hiding"
                    name="tour__radio"
                    value="no"
                  />
                  <span className="tour__span"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="tour__licenses">
            <label className="tour__license">
              <input
                type="checkbox"
                className="tour__license_input"
              />
              <span className="tour__checkbox"></span>
              Нажимая кнопку, я принимаю условия
              <a href="#" className="tour__license_link"
              >Лицензионного договора</a
              >
            </label>
          </div>
          <TourBtn/>
        </form>
      </div>
    </section>
  )
}

export default Tour



