import { FC } from "react";
import { Link, useParams } from "react-router-dom";

import styles from "./id.module.scss";

export const IdPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <Link to="/">К списку</Link>
      <p className={styles.p}>Снимок: {id}</p>
      <table className={styles.table}>
        <tbody></tbody>
      </table>
    </>
  );
};
