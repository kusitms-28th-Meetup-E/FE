import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "@/components/atoms/scrollTop";
import { KakaoCallBack } from "@/components/molecules/login/KakaoCallBack";
import Layout from "@/layout/Layout";
import AddInfoPage from "@/pages/AddInfoPage";
import { CommunityPage } from "@/pages/CommunityPage";
import DetailCommunityPage from "@/pages/DetailCommunityPage";
import DetailPage from "@/pages/DetailPage";
import Home from "@/pages/Home";
import LocalRegisterPage from "@/pages/LocalRegisterPage";
import { LoginPage } from "@/pages/LoginPage";
import { RealMyPage } from "@/pages/RealMyPage";
import RegisterPage from "@/pages/RegisterPage";
import SearchPage from "@/pages/SearchPage";

const router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
            path="/detail/:id"
            element={<DetailPage />}
          />
          <Route
            path="/community"
            element={<CommunityPage />}
          />
          <Route
            path="/detailcommunity/:topicId/:communityId"
            element={<DetailCommunityPage />}
          />
          <Route
            path="/search"
            element={<SearchPage />}
          />
          <Route
            path="/mypage"
            element={<RealMyPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
