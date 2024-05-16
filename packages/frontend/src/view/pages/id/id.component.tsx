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

  const [imgData, setImg] = useState<string[]>();

  const requestImg = useCallback(async () => {
    const imgData = await filesApi.getImgPath(id!);
    setImg(imgData);
  }, [id]);

  useEffect(() => {
    void requestImg();
  }, [requestImg]);

  const [imgCloud, setImgCloud] = useState<string[]>();

  const requestImgCloud = useCallback(async () => {
    const imgCloud = await filesApi.getImgCloudPath(id!);
    setImgCloud(imgCloud);
  }, [id]);

  useEffect(() => {
    void requestImgCloud();
  }, [requestImgCloud]);

  const [imgFog, setImgFog] = useState<string[]>();

  const requestImgFog = useCallback(async () => {
    const imgFog = await filesApi.getImgFogPath(id!);
    setImgFog(imgFog);
  }, [id]);

  useEffect(() => {
    void requestImgFog();
  }, [requestImgFog]);

  const [isCloudEnabled, setIsCloudEnabled] = useState(false);
  const [isFogEnabled, setIsFogEnabled] = useState(false);
  const [isAdminEnabled, setIsAdminEnabled] = useState(false);

  return (
    <>
      <p className={styles.pLink}>
        <Link to="/">К списку</Link>
      </p>
      <p className={styles.p}>Снимок: {id}</p>
      <div className={styles.container}>
        {imgData?.map((imgPath, i) => (
          <div className={styles.divImg}>
            <img src={`http://localhost:3000/${imgPath}`} alt="pic" height={150} width={100} />
            {isCloudEnabled && (
              <img src={`http://localhost:3000/${imgCloud?.[i]}`} alt="pic" height={150} width={100} />
            )}
            {isFogEnabled && <img src={`http://localhost:3000/${imgFog?.[i]}`} alt="pic" height={150} width={100} />}
          </div>
        ))}
      </div>
      <div className={styles.divCheckbox}>
        <label>Маски:</label>
        <label>
          <input type="checkbox" checked={isCloudEnabled} onChange={e => setIsCloudEnabled(e.target.checked)} />
          Облака
        </label>
        <label>
          <input type="checkbox" checked={isFogEnabled} onChange={e => setIsFogEnabled(e.target.checked)} />
          Туман
        </label>
        <label>
          <input type="checkbox" checked={isAdminEnabled} onChange={e => setIsAdminEnabled(e.target.checked)} />
          Админ
        </label>
      </div>
      <table className={styles.table}>
        <tbody>
          {Object.entries(fileMeta).map(([key, value]) => {
            if (typeof value !== "object") {
              return (
                <tr>
                  <td className={styles.td}>
                    <p>{key}</p>
                  </td>
                  <td>
                    {isAdminEnabled && <input type="text" className={styles.inputText} value={value}></input>}
                    {!isAdminEnabled && <p>{value}</p>}
                  </td>
                </tr>
              );
            } else {
              return (
                <>
                  <tr>
                    <td colSpan={2} className={styles.td}>
                      <p>{key}</p>
                    </td>
                  </tr>
                  {Object.entries(value as Record<string, any>).map(([key, value]) => {
                    return (
                      <tr>
                        <td className={styles.td}>
                          <p>{key}</p>
                        </td>
                        <td>
                          {isAdminEnabled && <input type="text" className={styles.inputText} value={value}></input>}
                          {!isAdminEnabled && <p>{value}</p>}
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
