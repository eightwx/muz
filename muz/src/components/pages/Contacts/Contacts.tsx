import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import styles from './Contacts.module.scss';

const Contacts: React.FC = () => {
  return (
    <div className={styles.contacts}>
      <Header />
      <main className={styles.main}>
        <h1>Контакты</h1>
        <p>Если у вас есть вопросы, свяжитесь с нами:</p>
        <p>Email: info@musicshop.com</p>
        <p>Телефон: +1 234 567 890</p>
        <p>Адрес: 1234 Музыкальная улица, Город музыки, Страна</p>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;
