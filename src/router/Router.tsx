import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { TopPage } from "../components/pages/TopPage";
import {
    TopPage,
    LoginPage,
    SigninPage,
    ChangePasswordPage,
    ForgotPasswordPage,
} from "../components/pages/top/index";
import { HomePage } from "../components/pages/app/HomePage";
import { ProfilePage } from "../components/pages/app/ProfilePage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<TopPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signin" element={<SigninPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/change-password" element={<ChangePasswordPage />} />
                <Route path="/home">
                    {/* /homeだけでいい？ */}
                    <Route path="/home/diary" index element={<HomePage />} />
                    <Route path="/home/emotion" element={<HomePage />} />
                    <Route path="/home/profile" element={<ProfilePage />}>
                        <Route path="/home/profile/settig" />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
