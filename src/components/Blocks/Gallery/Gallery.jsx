import React from 'react';
import './gallery.css'
import travel_1 from '../../../assetts/image/block_5/travel photo-1.jpg'
import travel_2 from '../../../assetts/image/block_5/travel photo-2.jpg'
import travel_3 from '../../../assetts/image/block_5/travel photo-3.jpg'
import travel_4 from '../../../assetts/image/block_5/travel photo-4.jpg'
import travel_5 from '../../../assetts/image/block_5/travel photo-5.jpg'
import travel_6 from '../../../assetts/image/block_5/travel photo-6.jpg'
import travel_7 from '../../../assetts/image/block_5/travel photo-7.jpg'
import travel_8 from '../../../assetts/image/block_5/travel photo-8.jpg'
import travel_9 from '../../../assetts/image/block_5/travel photo-9.jpg'
import travel_10 from '../../../assetts/image/block_5/travel photo-10.jpg'
import travel_11 from '../../../assetts/image/block_5/travel photo-11.jpg'
import travel_12 from '../../../assetts/image/block_5/travel photo-12.jpg'
import travel_13 from '../../../assetts/image/block_5/travel photo-13.jpg'

const Gallery = () => {
  return (
    <section className="gallery container">
      <div className="gallery__hat"
           data-aos="zoom-in"
           data-aos-duration="1500"
      >
        <h2 className="gallery__title title-h2">
          Фотографии путешествий
        </h2>
        <p className="gallery__subtitle subtitle">
          Идейные соображения высшего порядка, а также рамки и
          место обучения кадров
        </p>
      </div>
      <div className="gallery__block">
        <ul className="gallery__pictures">
          <li>
            <img
              className="gallery__img"
              src={travel_1}
              alt="Gallery"
            />
          </li>
          <li className="gallery__block_hidefirst">
            <img
              className="gallery__img"
              src={travel_2}
              alt="Gallery"
            />
          </li>
          <li className="gallery__block_hidesecond">
            <img
              className="gallery__img"
              src={travel_3}
              alt="Gallery"
            />
          </li>
          <li>
            <img
              className="gallery__img"
              src={travel_4}
              alt="Gallery"
            />
          </li>
        </ul>
        <ul className="gallery__picture">
          <li>
            <img
              className="gallery__image"
              src={travel_5}
              alt="Gallery"
            />
          </li>
          <li className="gallery__block_hidesecond">
            <img
              className="gallery__image"
              src={travel_6}
              alt="Gallery"
            />
          </li>
          <li className="gallery__block_hidefirst">
            <img
              className="gallery__image"
              src={travel_7}
              alt="Gallery"
            />
          </li>
          <li>
            <img
              className="gallery__image"
              src={travel_8}
              alt="Gallery"
            />
          </li>
          <li>
            <img
              className="gallery__image"
              src={travel_13}
              alt="Gallery"
            />
          </li>
        </ul>
        <ul className="gallery__pictures">
          <li>
            <img
              className="gallery__img"
              src={travel_9}
              alt="Gallery"
            />
          </li>
          <li>
            <img
              className="gallery__img"
              src={travel_10}
              alt="Gallery"
            />
          </li>
          <li className="gallery__block_hidesecond">
            <img
              className="gallery__img"
              src={travel_11}
              alt="Gallery"
            />
          </li>
          <li className="gallery__block_hidefirst">
            <img
              className="gallery__img"
              src={travel_12}
              alt="Gallery"
            />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Gallery



