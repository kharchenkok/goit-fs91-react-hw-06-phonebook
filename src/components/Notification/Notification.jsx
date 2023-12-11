import React from 'react';
import style from './Notification.module.css';

const Notification = ({ text }) => {
  return <div className={style.notification}>{text}</div>;
};
export default Notification;
