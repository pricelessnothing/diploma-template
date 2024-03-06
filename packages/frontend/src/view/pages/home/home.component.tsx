import { filesApi } from "@diploma/frontend/api/files.api";
import { FileList } from "@diploma/frontend/view/components/file-list/file-list.component";
import { FC, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./home.module.scss";

export const HomePage: FC = () => {
  const [files, setFiles] = useState<string[]>();

  const requestFiles = useCallback(async () => {
    const files = await filesApi.getFiles();
    setFiles(files);
  }, []);

  useEffect(() => {
    void requestFiles();
  }, [requestFiles]);

  return (
    <>
      {/* <ul>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(id => (
          <li key={id}>
            <Link to={`/${id}`}>Что-то с ID={id}</Link>
          </li>
        ))}
      </ul> */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Имя</th>
            <th className={styles.th}>Ссылка</th>
          </tr>
        </thead>
        <tbody>
          {files?.map(filename => (
            <tr>
              <td className={styles.td}></td>
              <td className={styles.td}>
                <Link to={`/${filename}`}>Что-то с ID={filename}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <FileList files={files ?? []} />
    </>
  );
};
