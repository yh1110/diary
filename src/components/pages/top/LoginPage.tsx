import { InputForm } from "../../templetes/InputForm";
import { InputAreaDataType } from "../../api/InputAreaDataType";
import { InputBase } from "../../atoms/input/InputBase";
import { ChangeEvent, useCallback, useContext, useEffect, useState } from "react";
import { LinkToFormButtonBase } from "../../atoms/button/transition/LinkToFormButtonBase";
import { SubmitBaseButton } from "../../atoms/button/submit/SubmitBaseButton";
import { authRepository } from "../../../repositories/auth";
import { SessionContext } from "../../../providers/SessionProvider";
import { Navigate } from "react-router-dom";
import { LoadingPage } from "../LoadingPage";
const Email = InputAreaDataType[1];
const Password = InputAreaDataType[3];

export const LoginPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { currentUser, setCurrentUser } = useContext<any>(SessionContext);
    const [loading, setLoading] = useState<boolean>(false);
    const [navigate, setNavigate] = useState<boolean>(false);

    const login = async () => {
        const user = await authRepository.login(email, password);
        setCurrentUser(user);
    };

    useEffect(() => {
        const replacePath = async () => {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setLoading(false);
            setNavigate(true);
        };

        if (currentUser != null) {
            replacePath();
        }
    }, [currentUser]);

    if (loading) {
        return <LoadingPage />;
    }

    if (navigate) {
        return <Navigate replace to="/home/diary" />;
    }

    return (
        <InputForm title="ログイン">
            <InputBase
                key={Email.id}
                placeholder={Email.placeholder}
                type={Email.input_type}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value);
                }}
            />
            <InputBase
                key={Password.id}
                placeholder={Password.placeholder}
                type={Password.input_type}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.target.value);
                }}
            />
            <SubmitBaseButton
                buttonText="ログイン"
                onClick={login}
                disabled={email === "" || password === ""}
            />

            <LinkToFormButtonBase
                link="/forgot-password"
                buttonText="パスワードを忘れた方はこちら"
            />

            <LinkToFormButtonBase link="/signin" buttonText="新規登録" />
        </InputForm>
    );
};
