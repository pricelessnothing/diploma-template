import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/home.component";
import { MainLayout } from "./layout/layout.component";
import { IdPage } from "./pages/id/id.component";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/:id" element={<IdPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
