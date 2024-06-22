import { InputForm } from "../../templetes/InputForm";
import { InputAreaDataType } from "../../api/InputAreaDataType";
import { InputBase } from "../../atoms/input/InputBase";
import { ChangeEvent, useCallback, useContext, useState } from "react";
import { LinkToFormButtonBase } from "../../atoms/button/transition/LinkToFormButtonBase";
import { SubmitBaseButton } from "../../atoms/button/submit/SubmitBaseButton";
import { authRepository } from "../../../repositories/auth";
import { SessionContext } from "../../../providers/SessionProvider";
import { Navigate } from "react-router-dom";
const Email = InputAreaDataType[1];
const Password = InputAreaDataType[3];

export const LoginPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { currentUser, setCurrentUser } = useContext<any>(SessionContext);

    const login = async () => {
        console.log(email);
        console.log(password);

        const user = await authRepository.login(email, password);
        setCurrentUser(user);
    };

    if (currentUser != null) return <Navigate replace to="/home/diary" />;

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
