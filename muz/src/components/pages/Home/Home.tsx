import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import products from '../../../data/productData';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

// Компонент `Home` отвечает за отображение главной страницы
const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 4); // Выберите первые 4 продукта или любые другие по вашему выбору

  useEffect(() => {
    const sections = document.querySelectorAll(`.${styles.section}`);
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add(styles.visible);
      }, index * 200); // Задержка для последовательной анимации
    });
  }, []);

  return (
    <div className={styles.home}>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Добро пожаловать</h1>
            <p className={styles.heroSubtitle}>Откройте для себя лучшие музыкальные инструменты</p>
            <Link to="/catalog" className={styles.heroButton}>
              Каталог
            </Link>
          </div>
        </section>

        <section className={`${styles.section} ${styles.featuredCategories}`}>
          <h2 className={styles.sectionTitle}>Популярные категории</h2>
          <div className={styles.categoriesGrid}>
            {/* Пример карточек категорий */}
            <div className={styles.categoryCard}>
              <Link to="/catalog?category=Гитары">
                <h3>Гитары</h3>
              </Link>
            </div>
            <div className={styles.categoryCard}>
              <Link to="/catalog?category=Ударные">
                <h3>Ударные</h3>
              </Link>
            </div>
            <div className={styles.categoryCard}>
              <Link to="/catalog?category=Клавишные">
                <h3>Клавишные</h3>
              </Link>
            </div>
            <div className={styles.categoryCard}>
              <Link to="/catalog?category=Духовые">
                <h3>Духовые</h3>
              </Link>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.featuredProducts}`}>
          <h2 className={styles.sectionTitle}>Рекомендуемые товары</h2>
          <div className={styles.productsGrid}>
            {featuredProducts.map((product, index) => (
              <div key={index} className={styles.productCard}>
                <Link to={`/product/${product.name}`}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.price} руб.</p>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* <section className={`${styles.section} ${styles.specialOffers}`}>
          <h2 className={styles.sectionTitle}>Специальные предложения</h2>
          <div className={styles.offersGrid}>
            <div className={styles.offerCard}>
              <Link to="/catalog?onSale=true">
                <h3>Скидка 20% на гитары</h3>
                <p>Только до конца месяца!</p>
              </Link>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
