import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Catalog.module.scss';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import products from '../../../data/productData';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Catalog: React.FC = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const initialCategory = query.get('category') || 'Все категории';
  const initialOnSale = query.get('onSale') === 'true';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [showOnSale, setShowOnSale] = useState(initialOnSale);

  useEffect(() => {
    setSelectedCategory(initialCategory);
    setShowOnSale(initialOnSale);
  }, [initialCategory, initialOnSale]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleOnSaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowOnSale(e.target.checked);
  };

  const filteredProducts = products.filter((product) => {
    const isInCategory =
      selectedCategory === 'Все категории' || product.category === selectedCategory;
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const isOnSale = !showOnSale || product.isOnSale;
    return isInCategory && matchesSearchTerm && isOnSale;
  });

  return (
    <>
      <Header />
      <div className={styles.catalog}>
        <main className={styles.main}>
          <h1>Каталог товаров</h1>
          <button className={styles.backButton} onClick={() => navigate(-1)}>
            Назад
          </button>
          <div className={styles.filters}>
            <input
              type="text"
              placeholder="Поиск товаров..."
              value={searchTerm}
              onChange={handleSearchChange}
              className={styles.searchInput}
            />
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className={styles.categorySelect}>
              <option value="Все категории">Все категории</option>
              <option value="Гитары">Гитары</option>
              <option value="Клавишные">Клавишные</option>
              <option value="Ударные">Ударные</option>
              <option value="Струнные">Струнные</option>
              <option value="Духовые">Духовые</option>
            </select>
            <label className={styles.onSaleLabel}>
              <input
                type="checkbox"
                checked={showOnSale}
                onChange={handleOnSaleChange}
                className={styles.onSaleCheckbox}
              />
              Только товары на скидке
            </label>
          </div>
          <div className={styles.productGrid}>
            {filteredProducts.map((product, index) => (
              <div key={index} className={styles.productCard}>
                <Link to={`/product/${product.name}`}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.price} руб.</p>
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Catalog;
