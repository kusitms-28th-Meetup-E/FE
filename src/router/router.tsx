import { BrowserRouter, Routes, Route } from "react-router-dom";

import { KakaoCallBack } from "@/components/molecules/login/KakaoCallBack";
import Layout from "@/layout/Layout";
import AddInfoPage from "@/pages/AddInfoPage";
import { CommunityPage } from "@/pages/CommunityPage";
import Home from "@/pages/Home";
import LocalRegisterPage from "@/pages/LocalRegisterPage";
import { LoginPage } from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/login/kakao"
          element={<KakaoCallBack />}
        />
        <Route
          path="/register"
          element={<RegisterPage />}
        />
        <Route
          path="/localRegister"
          element={<LocalRegisterPage />}
        />
        <Route
          path="/addInfomation"
          element={<AddInfoPage />}
        />
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/community"
            element={<CommunityPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
