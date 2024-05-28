import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>Добро пожаловать в MusicShop</h1>
            <p>Лучшие инструменты для вашей музыки</p>
            <Link to="/catalog" className={styles.heroButton}>
              Перейти к каталогу
            </Link>
          </div>
          <div className={styles.heroImage}>
            <img src="/assets/img/hero.jpg" alt="Музыкальные инструменты" />
          </div>
        </section>
        <section className={styles.featuredCategories}>
          <h2>Популярные категории</h2>
          <div className={styles.categoriesGrid}>
            <Link to="/catalog?category=Гитары" className={styles.categoryCard}>
              <img src="/assets/img/guitars.jpg" alt="Гитары" />
              <h3>Гитары</h3>
            </Link>
            <Link to="/catalog?category=Клавишные" className={styles.categoryCard}>
              <img src="/assets/img/keyboards.jpg" alt="Клавишные" />
              <h3>Клавишные</h3>
            </Link>
            <Link to="/catalog?category=Ударные" className={styles.categoryCard}>
              <img src="/assets/img/drums.jpg" alt="Ударные" />
              <h3>Ударные</h3>
            </Link>
            <Link to="/catalog?category=Струнные" className={styles.categoryCard}>
              <img src="/assets/img/strings.jpg" alt="Струнные" />
              <h3>Струнные</h3>
            </Link>
          </div>
        </section>
        <section className={styles.featuredProducts}>
          <h2>Рекомендуемые товары</h2>
          <div className={styles.productsGrid}>
            {/* Пример товара */}
            <Link to="/product/product-1" className={styles.productCard}>
              <img src="/assets/img/product-1.jpg" alt="Продукт 1" />
              <h3>Продукт 1</h3>
              <p>1000 руб.</p>
            </Link>
            <Link to="/product/product-2" className={styles.productCard}>
              <img src="/assets/img/product-2.jpg" alt="Продукт 2" />
              <h3>Продукт 2</h3>
              <p>2000 руб.</p>
            </Link>
            {/* Добавьте больше товаров здесь */}
          </div>
        </section>
        <section className={styles.specialOffers}>
          <h2>Специальные предложения</h2>
          <div className={styles.offersGrid}>
            <Link to="/catalog?onSale=true" className={styles.offerCard}>
              <img src="/assets/img/offer.jpg" alt="Специальное предложение" />
              <h3>Скидка 20% на гитары</h3>
              <p>Только до конца месяца!</p>
            </Link>
            {/* Добавьте больше специальных предложений здесь */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
