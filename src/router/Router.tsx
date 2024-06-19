import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { TopPage } from "../components/pages/TopPage";
import {
    TopPage,
    LoginPage,
    SigninPage,
    ChangePasswordPage,
    ForgotPasswordPage,
} from "../components/pages/top/index";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<TopPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signin" element={<SigninPage />} />
                <Route
                    path="/forgot-password"
                    element={<ForgotPasswordPage />}
                />
                <Route
                    path="/change-password"
                    element={<ChangePasswordPage />}
                />
            </Routes>
        </BrowserRouter>
    );
};
