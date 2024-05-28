import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Product.module.scss';
import products from '../../../data/productData';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

const Product: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.name === productId);

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return (
    <>
      <Header />
      <div className={styles.product}>
        <main className={styles.main}>
          <button className={styles.backButton} onClick={() => navigate(-1)}>
            Назад
          </button>
          <h1>{product.name}</h1>
          <img src={product.image} alt={product.name} />
          <p>{product.price} руб.</p>
          <p>{product.description}</p>
          <h2>Характеристики</h2>
          <ul>
            {product.specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Product;
