import { InputForm } from "../../templetes/InputForm";
import { InputAreaDataType } from "../../api/InputAreaDataType";
import { InputBase } from "../../atoms/input/InputBase";
import { LinkToFormButtonBase } from "../../atoms/button/transition/LinkToFormButtonBase";
import { SubmitBaseButton } from "../../atoms/button/submit/SubmitBaseButton";
import { ChangeEvent, useCallback, useContext, useEffect, useState } from "react";
import { authRepository } from "../../../repositories/auth";
import { SessionContext } from "../../../providers/SessionProvider";
import { Navigate } from "react-router-dom";
import { LoadingPage } from "../LoadingPage";

const User_name = InputAreaDataType[0];
const Email = InputAreaDataType[1];
const Birthdate = InputAreaDataType[2];
const Password = InputAreaDataType[3];
const Password_confirmation = InputAreaDataType[4];

export const SigninPage = () => {
    const [userName, setUserName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [birthdate, setBirthdate] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
    const { currentUser, setCurrentUser } = useContext<any>(SessionContext);
    const [loading, setLoading] = useState<boolean>(false);
    const [navigate, setNavigate] = useState<boolean>(false);
    const [newUser, setNewUser] = useState<any>();

    const signin = async () => {
        if (password === passwordConfirmation) {
            const user = await authRepository.signup(userName, birthdate, email, password);
            window.alert("登録完了");
            setNewUser(user);
            setCurrentUser(user); //現在ログインしているユーザー情報更新
        } else {
            window.alert("パスワードが一致しません");
        }
    };

    useEffect(() => {
        const replacePath = async () => {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setLoading(false);
            setNavigate(true);
        };

        if (newUser != null) {
            replacePath();
        }
    }, [newUser]);

    if (loading) {
        return <LoadingPage />;
    }

    if (navigate) {
        return <Navigate replace to="/home/diary" />;
    }

    return (
        <InputForm title="新規登録">
            <InputBase
                key={User_name.id}
                placeholder={User_name.placeholder}
                type={User_name.input_type}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setUserName(e.target.value);
                }}
            />
            <InputBase
                key={Email.id}
                placeholder={Email.placeholder}
                type={Email.input_type}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value);
                }}
            />
            <InputBase
                key={Birthdate.id}
                placeholder={Birthdate.placeholder}
                type={Birthdate.input_type}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setBirthdate(e.target.value);
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
            <InputBase
                key={Password_confirmation.id}
                placeholder={Password_confirmation.placeholder}
                type={Password_confirmation.input_type}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setPasswordConfirmation(e.target.value);
                }}
            />

            <SubmitBaseButton
                buttonText="入力を完了する"
                onClick={signin}
                disabled={
                    email === "" ||
                    password === "" ||
                    userName === "" ||
                    birthdate === "" ||
                    passwordConfirmation === ""
                }
            />
            <LinkToFormButtonBase link="/login" buttonText="アカウントをお持ちの方はこちら" />
        </InputForm>
    );
};
