import { InputForm } from "../../templetes/InputForm";
import { InputAreaDataType } from "../../api/InputAreaDataType";
import { InputBase } from "../../atoms/input/InputBase";
import { useCallback } from "react";
import { LinkToFormButtonBase } from "../../atoms/button/transition/LinkToFormButtonBase";
import { SubmitBaseButton } from "../../atoms/button/submit/SubmitBaseButton";

export const SigninPage = () => {
    console.log(InputAreaDataType);
    return (
        <InputForm title="新規登録">
            {InputAreaDataType.map(
                useCallback((form) => {
                    return (
                        <InputBase
                            key={form.id}
                            placeholder={form.placeholder}
                            type={form.input_type}
                        />
                    );
                }, [])
            )}
            <SubmitBaseButton buttonText="入力を完了する" />
            <LinkToFormButtonBase
                link="/login"
                buttonText="アカウントをお持ちの方はこちら"
            />
        </InputForm>
    );
};
