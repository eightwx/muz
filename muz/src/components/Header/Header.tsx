import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">MusicShop</Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/">Главная</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/contacts">Контакты</Link>
        {user ? (
          <>
            <Link to="/profile">Профиль</Link>
            <button className={styles.logout} onClick={handleLogout}>
              Выйти
            </button>
          </>
        ) : (
          <Link to="/login">Войти</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
