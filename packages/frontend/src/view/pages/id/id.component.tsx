import { FC } from "react";
import { Link, useParams } from "react-router-dom";

export const IdPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <Link to="/">К списку</Link>
      <p>Страница чего-то с ID={id}</p>
    </>
  );
};
