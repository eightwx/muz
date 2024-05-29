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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const isInCategory =
      selectedCategory === 'Все категории' || product.category === selectedCategory;
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return isInCategory && matchesSearchTerm;
  });

  return (
    <>
      <Header />
      <div className={styles.catalog}>
        <main className={styles.main}>
          <button className={styles.backButton} onClick={() => navigate(-1)}>
            Назад
          </button>
          <h1>Каталог товаров</h1>
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
