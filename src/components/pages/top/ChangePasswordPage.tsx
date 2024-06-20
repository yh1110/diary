import { InputForm } from "../../templetes/InputForm";
import { InputAreaDataType } from "../../api/InputAreaDataType";
import { InputBase } from "../../atoms/input/InputBase";
import { ChangeEvent, useCallback, useState } from "react";
import { SubmitBaseButton } from "../../atoms/button/submit/SubmitBaseButton";
const Password = InputAreaDataType[3];
const Password_confirmation = InputAreaDataType[4];

export const ChangePasswordPage = () => {
    const [password, setPassword] = useState<string>("");
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

    return (
        <InputForm title="パスワード再設定">
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
                buttonText="パスワード変更完了"
                onClick=""
                disabled={password === "" || passwordConfirmation === ""}
            />
        </InputForm>
    );
};
