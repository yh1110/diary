import { InputForm } from "../../templetes/InputForm";
import { InputAreaDataType } from "../../api/InputAreaDataType";
import { InputBase } from "../../atoms/input/InputBase";
import { useCallback } from "react";
import { LinkToFormButtonBase } from "../../atoms/button/transition/LinkToFormButtonBase";
import { SubmitBaseButton } from "../../atoms/button/submit/SubmitBaseButton";

export const LoginPage = () => {
    console.log(InputAreaDataType);
    return (
        <InputForm title="ログイン">
            {InputAreaDataType.map(
                useCallback((form) => {
                    if (
                        form.data_name === "email" ||
                        form.data_name === "password"
                    ) {
                        return (
                            <InputBase
                                key={form.id}
                                placeholder={form.placeholder}
                                type={form.input_type}
                            />
                        );
                    }
                }, [])
            )}
            <SubmitBaseButton buttonText="ログイン" />

            <LinkToFormButtonBase
                link="/forgot-password"
                buttonText="パスワードを忘れた方はこちら"
            />

            <LinkToFormButtonBase link="/signin" buttonText="新規登録" />
        </InputForm>
    );
};
