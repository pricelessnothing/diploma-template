import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header.component";
import { Footer } from "./footer.component";

export const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
