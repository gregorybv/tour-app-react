import React from 'react';
import './story.css'
import story_1 from '../../../assetts/image/block_6/story photo-1.jpg'
import story_2 from '../../../assetts/image/block_6/story photo-2.jpg'
import story_3 from '../../../assetts/image/block_6/story photo-3.jpg'
import arrow from '../../../assetts/image/block_2/icon/arrow.png'

const Story = () => {
  return (
    <section id="stories" className="story">
      <div className="story__container">
        <div className="story__hat"
             data-aos="zoom-in"
             data-aos-duration="1500"
        >
          <h2 className="story__title title-h2">
            Истории путешествий
          </h2>
          <p className="story__subtitle subtitle">
            Идейные соображения высшего порядка, а также
            рамки и место обучения кадров
          </p>
        </div>
        <ul className="story__blocks">
          <li className="story__content">
            <div className="story__body">
              <h3 className="story__text">
                Автостопом в Стамбул
              </h3>
              <p className="story__subtext">
                Идейные соображения высшего порядка, а
                также рамки и место обучения кадров
                обеспечивает широкому кругу
                (специалистов) участие в формировании
                новых предложений:
              </p>
              <div className="story__list">
                <ul>
                  <li>вкусная еда</li>
                  <li>дешевый транспорт</li>
                  <li>красивый город.</li>
                </ul>
              </div>
            </div>
            <div className="story__footer">
              <button
                type="button"
                className="story__button button"
              >
                Подробнее
                <img
                  className="story__icon"
                  src={arrow}
                  alt="arrow"
                />
              </button>
              <div className="story__networks">
                <a
                  href="src/components/Blocks/Story/Story"
                  target="_blank"
                  className="story__link"
                >instagram</a
                >
                <a
                  href="src/components/Blocks/Story/Story"
                  target="_blank"
                  className="story__link"
                >facebook</a
                >
                <a
                  href="src/components/Blocks/Story/Story"
                  target="_blank"
                  className="story__link"
                >YouTube</a
                >
              </div>
            </div>
            <img
              className="story__image"
              src={story_1}
              alt="story photo-1"
            />
          </li>
          <li className="story__content">
            <div className="story__body">
              <h3 className="story__text">
                Автостопом в Стамбул
              </h3>
              <p className="story__subtext">
                Идейные соображения высшего порядка, а
                также рамки и место обучения кадров
                обеспечивает широкому кругу
                (специалистов) участие в формировании
                новых предложений.
              </p>
            </div>
            <div className="story__footer">
              <button
                type="button"
                className="story__button button"
              >
                Подробнее
                <img
                  className="story__icon"
                  src={arrow}
                  alt="arrow"
                />
              </button>
              <div className="story__networks">
                <a
                  href="src/components/Blocks/Story/Story"
                  target="_blank"
                  className="story__link"
                >instagram</a
                >
                <a
                  href="src/components/Blocks/Story/Story"
                  target="_blank"
                  className="story__link"
                >ВКонтакте</a
                >
              </div>
            </div>
            <img
              className="story__image"
              src={story_2}
              alt="story photo-2"
            />
          </li>
          <li className="story__content">
            <div className="story__body">
              <h3 className="story__text">
                Автостопом в Стамбул
              </h3>
              <p className="story__subtext">
                Идейные соображения высшего порядка, а
                также рамки и место обучения кадров
                обеспечивает широкому кругу
                (специалистов) участие в формировании
                новых предложений.
              </p>
            </div>
            <div className="story__footer">
              <button
                type="button"
                className="story__button button"
              >
                Подробнее
                <img
                  className="story__icon"
                  src={arrow}
                  alt="arrow"
                />
              </button>
              <div className="story__networks">
                <a
                  href="src/components/Blocks/Story/Story"
                  target="_blank"
                  className="story__link"
                >instagram</a
                >
                <a
                  href="src/components/Blocks/Story/Story"
                  target="_blank"
                  className="story__link"
                >facebook</a
                >
                <a
                  href="src/components/Blocks/Story/Story"
                  target="_blank"
                  className="story__link"
                >ВКонтакте</a
                >
              </div>
            </div>
            <img
              className="story__image"
              src={story_3}
              alt="story photo-3"
            />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Story



