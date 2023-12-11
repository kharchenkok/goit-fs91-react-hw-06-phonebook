import React from 'react';
import style from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={style.section}>
      {title && <h2 className={style.section__title}>{title}</h2>}
      {children}
    </section>
  );
};
export default Section;
