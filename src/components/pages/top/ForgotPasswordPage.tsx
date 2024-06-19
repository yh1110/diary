import { InputForm } from "../../templetes/InputForm";
import { InputAreaDataType } from "../../api/InputAreaDataType";
import { InputBase } from "../../atoms/input/InputBase";
import { useCallback } from "react";
import { LinkToFormButtonBase } from "../../atoms/button/transition/LinkToFormButtonBase";
import { SubmitBaseButton } from "../../atoms/button/submit/SubmitBaseButton";
import { Text } from "@yamada-ui/react";

export const ForgotPasswordPage = () => {
    console.log(InputAreaDataType);
    return (
        <InputForm title="パスワード再設定">
            <Text fontSize="xs">
                登録済みのメールアドレスを入力してください
            </Text>
            {InputAreaDataType.map(
                useCallback((form) => {
                    if (form.data_name === "email") {
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
            <Text fontSize="0.7rem" marginTop="-1.25rem" color="neutral.500">
                ご登録されているメールアドレスに認証メールをお送りします
            </Text>

            <SubmitBaseButton buttonText="送信" />
            <LinkToFormButtonBase
                link="/login"
                buttonText="ログイン画面へ戻る"
            />
        </InputForm>
    );
};
