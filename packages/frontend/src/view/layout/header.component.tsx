import { FC } from "react";

import styles from "./layout.module.scss";
import { useAuthStore } from "@diploma/frontend/store/auth.store";

export const Header: FC = () => {
  const { isLoggedIn, logout } = useAuthStore();

  const handleLoginClick = () => {
    // TODO: модальное окно с формой ввода логина и пароля
    // Если логин и пароль совпадают с ожидаемыми, вызывается logout из useAuthStore
  };

  return (
    <header className={styles.header}>
      <p>Программный модуль</p>
      <p>визуализации природных явлений на спутниковых снимках</p>
      {/* TODO: поправить по верстке */}
      {isLoggedIn ? <button onClick={() => logout()}>Выйти</button> : <button onClick={handleLoginClick}>Войти</button>}
    </header>
  );
};
