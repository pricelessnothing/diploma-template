import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header.component";
import { Footer } from "./footer.component";

import styles from "./layout.module.scss";

export const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <main className={styles.layout__main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
