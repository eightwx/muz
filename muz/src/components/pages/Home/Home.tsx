import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import categories from '../../../data/categoriesData';
import products from '../../../data/productData';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const Home: React.FC = () => {
  const recommendedProducts = products.slice(0, 4);

  return (
    <div className={styles.home}>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Добро пожаловать в наш магазин музыкальных инструментов
            </h1>
            <p className={styles.heroSubtitle}>Исследуйте мир музыки с нашими инструментами</p>
            <Link to="/catalog" className={styles.heroButton}>
              Перейти в каталог
            </Link>
          </div>
        </section>
        <section className={`${styles.section} ${styles.featuredCategories}`}>
          <h2 className={styles.sectionTitle}>Популярные категории</h2>
          <div className={styles.categoriesGrid}>
            {categories.map((category, index) => (
              <div key={index} className={styles.categoryCard}>
                <Link to={`/catalog?category=${encodeURIComponent(category.name)}`}>
                  <img src={category.image} alt={category.name} />
                  <h3>{category.name}</h3>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className={`${styles.section} ${styles.featuredProducts}`}>
          <h2 className={styles.sectionTitle}>Рекомендуемые товары</h2>
          <div className={styles.productsGrid}>
            {recommendedProducts.map((product, index) => (
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
      </main>
      <Footer />
    </div>
  );
};

export default Home;
