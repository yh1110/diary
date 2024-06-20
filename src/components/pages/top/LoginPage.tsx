import { InputForm } from "../../templetes/InputForm";
import { InputAreaDataType } from "../../api/InputAreaDataType";
import { InputBase } from "../../atoms/input/InputBase";
import { ChangeEvent, useCallback, useState } from "react";
import { LinkToFormButtonBase } from "../../atoms/button/transition/LinkToFormButtonBase";
import { SubmitBaseButton } from "../../atoms/button/submit/SubmitBaseButton";
const Email = InputAreaDataType[1];
const Password = InputAreaDataType[3];

export const LoginPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
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
                onClick={``}
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
