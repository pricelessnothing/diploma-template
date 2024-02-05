import { FC } from "react";

import styles from "./file-list.module.scss";

export interface FileListProps {
  files: string[];
}

export const FileList: FC<FileListProps> = ({ files }) => {
  return (
    <div className={styles.container}>
      {files.map(file => (
        <div key={file} className={styles.item}>
          {file}
        </div>
      ))}
    </div>
  );
};
