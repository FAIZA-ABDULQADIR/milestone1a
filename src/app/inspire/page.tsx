import React from 'react';
import Image from 'next/image'; 
import style from './inspire.module.css'; 

export default function Inspire() {
  return (
    <div className={style.inspireContainer}>
      <h1 className={style.pageTitle}>My Inspirations</h1>

      <div className={style.cardContainer}>
        {/* Card 1: Sir Ameen Alam */}
        <div className={style.card}>
          <div className={style.imageContainer}>
            <Image src="/sir ameen1.jpg" alt="sir ameen1" width={300} height={300} className={style.image} />
          </div>
          <h2 className={style.cardTitle}>Sir Ameen Alam</h2>
          <p className={style.cardDescription}>
            Sir Ameen Alam’s leadership and vision have been a source of inspiration for me. His ability to empower others and his wisdom have shaped the way I approach challenges.
          </p>
        </div>

        {/* Card 2: Sir Daniyal Nagori */}
        <div className={style.card}>
          <div className={style.imageContainer}>
            <Image src="/sir daniyal.jpg" alt="sir daniyal" width={300} height={300} className={style.image} />
          </div>
          <h2 className={style.cardTitle}>Sir Daniyal Nagori</h2>
          <p className={style.cardDescription}>
            Sir Daniyal Nagori’s passion for IT and his commitment to pushing boundaries have inspired me to think outside the box and challenge myself every day.
          </p>
        </div>

        {/* Card 3: Zia Khan */}
        <div className={style.card}>
          <div className={style.imageContainer}>
            <Image src="/sir zia3.jpg" alt="sir zia3" width={300} height={300} className={style.image} />
          </div>
          <h2 className={style.cardTitle}>Zia Khan</h2>
          <p className={style.cardDescription}>
            Zia Khan’s innovative approach to technology and its ability to create positive change in society have deeply influenced my journey into the world of AI.
          </p>
        </div>
      </div>
    </div>
  );
}
