import { FC, useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import styles from "./id.module.scss";
import { filesApi } from "@diploma/frontend/api/files.api";

export const IdPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const [fileMeta, setFileMeta] = useState<Record<string, any>>({});

  const requestFileMeta = useCallback(async () => {
    const fileMeta = await filesApi.getFileMeta(id!);
    setFileMeta(fileMeta.SPP_ROOT);
  }, [id]);

  useEffect(() => {
    void requestFileMeta();
  }, [requestFileMeta]);

  return (
    <>
      <Link to="/">К списку</Link>
      <p className={styles.p}>Снимок: {id}</p>
      <table className={styles.table}>
        <tbody>
          {Object.entries(fileMeta).map(([key, value]) => {
            if (typeof value !== "object") {
              return (
                <tr>
                  <td>
                    <p>{key}</p>
                  </td>
                  <td>
                    <p>{value}</p>
                  </td>
                </tr>
              );
            } else {
              return (
                <>
                  <tr>
                    <td colSpan={2}>{key}</td>
                  </tr>
                  {Object.entries(value as Record<string, any>).map(([key, value]) => {
                    return (
                      <tr>
                        <td>
                          <p>{key}</p>
                        </td>
                        <td>
                          <p>{value}</p>
                        </td>
                      </tr>
                    );
                  })}
                </>
              );
            }
          })}
        </tbody>
      </table>
    </>
  );
};
