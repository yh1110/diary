import { InputForm } from "../../templetes/InputForm";
import { InputAreaDataType } from "../../api/InputAreaDataType";
import { InputBase } from "../../atoms/input/InputBase";
import { useCallback } from "react";
import { SubmitBaseButton } from "../../atoms/button/submit/SubmitBaseButton";

export const ChangePasswordPage = () => {
    console.log(InputAreaDataType);
    return (
        <InputForm title="パスワード再設定">
            {InputAreaDataType.map(
                useCallback((form) => {
                    if (
                        form.data_name === "password" ||
                        form.data_name === "password_confirmation"
                    ) {
                        return (
                            <InputBase
                                key={form.id}
                                placeholder={`新規${form.placeholder}`}
                                type={form.input_type}
                            />
                        );
                    }
                }, [])
            )}
            <SubmitBaseButton buttonText="パスワード変更完了" />
        </InputForm>
    );
};
