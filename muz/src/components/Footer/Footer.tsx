import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h3>Контактная информация</h3>
          <p>Email: info@musicshop.com</p>
          <p>Телефон: +1 234 567 890</p>
          <p>Адрес: 1234 Музыкальная улица, Город музыки, Страна</p>
        </div>
        <div className={styles.links}>
          <h3>Полезные ссылки</h3>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/catalog?category=Гитары">Гитары</Link>
            </li>
            <li>
              <Link to="/catalog?category=Клавишные">Клавишные</Link>
            </li>
            <li>
              <Link to="/catalog?category=Ударные">Ударные</Link>
            </li>
            <li>
              <Link to="/catalog?category=Струнные">Струнные</Link>
            </li>
            <li>
              <Link to="/catalog?category=Духовые">Духовые</Link>
            </li>
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
            <li>
              <Link to="/profile">Профиль</Link>
            </li>
          </ul>
        </div>
        <div className={styles.newsletter}>
          <h3>Подписка на новости</h3>
          <form>
            <input type="email" placeholder="Ваш email" />
            <button type="submit">Подписаться</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
