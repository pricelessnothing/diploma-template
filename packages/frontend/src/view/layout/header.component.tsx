import { FC } from "react";

import styles from "./layout.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <p>Программный модуль</p>
      <p>визуализации природных явлений на спутниковых снимках</p>
    </header>
  );
};
