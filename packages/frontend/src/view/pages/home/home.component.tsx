import { filesApi } from "@diploma/frontend/api/files.api";
import { FC, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <ul>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(id => (
          <li key={id}>
            <Link to={`/${id}`}>Что-то с ID={id}</Link>
          </li>
        ))}
      </ul>
      <pre>{JSON.stringify(files, null, 2)}</pre>
    </>
  );
};
