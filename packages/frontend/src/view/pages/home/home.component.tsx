import { filesApi } from "@diploma/frontend/api/files.api";

// import { FileList } from "@diploma/frontend/view/components/file-list/file-list.component";
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
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Имя снимка</th>
            <th>Ссылка</th>
          </tr>
        </thead>
        <tbody>
          {files?.map(filename => (
            <tr>
              <td>
                <p>{filename}</p>
              </td>
              <td>
                <Link to={`/${filename}`}>Подробнее</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <FileList files={files ?? []} /> */}
    </>
  );
};
