import React from 'react';
import '../../styles/review.css'
import review_1 from '../../assetts/image/block_4/review photo-1.png'
import review_2 from '../../assetts/image/block_4/review photo-2.png'

const Review = () => {
  return (
    <section id="review" className="review container">
      <div className="review__hat"
           data-aos="zoom-in"
           data-aos-duration="1500"
      >
        <h2 className="review__title title-h2">
          Отзывы наших путешественников
        </h2>
        <p className="review__subtitle subtitle">
          Идейные соображения высшего порядка, а также рамки и
          место обучения кадров
        </p>
      </div>
      <ul className="review__contents">
        <li className="review__column">
          <p className="review__text">
            Идейные соображения высшего порядка, а также
            рамки и место обучения кадров обеспечивает
            широкому кругу (специалистов) участие в
            формировании новых предложений. Идейные
            соображения высшего порядка, а также начало
            повседневной работы по формированию позиции
            позволяет оценить значение модели развития.
          </p>
          <div className="review__author">
            <div className="review__frame">
              <h3 className="review__name">Мария</h3>
              <p className="review__subtext">
                Тур: Вдали от дома
              </p>
            </div>
            <img
              className="review__img"
              src={review_1}
              alt="Author"
            />
          </div>
        </li>
        <li className="review__column">
          <p className="review__text">
            Равным образом постоянный количественный рост и
            сфера нашей активности играет важную роль в
            формировании системы обучения кадров,
            соответствует насущным потребностям.
          </p>
          <p className="review__text">
            Значимость этих проблем настолько очевидна, что
            дальнейшее развитие различных форм деятельности
            обеспечивает широкому кругу (специалистов)
            участие в формировании новых предложений.
            Повседневная практика показывает, что реализация
            намеченных плановых заданий в значительной
            степени обуславливает создание модели развития.
          </p>
          <div className="review__author">
            <div className="review__frame">
              <h3 className="review__name">Павел</h3>
              <p className="review__subtext">
                Тур: Путешествие в горы
              </p>
            </div>
            <img
              className="review__img"
              src={review_2}
              alt="Author"
            />
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Review



