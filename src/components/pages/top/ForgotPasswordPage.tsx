import { InputForm } from "../../templetes/InputForm";
import { InputAreaDataType } from "../../api/InputAreaDataType";
import { InputBase } from "../../atoms/input/InputBase";
import { ChangeEvent, useCallback, useState } from "react";
import { LinkToFormButtonBase } from "../../atoms/button/transition/LinkToFormButtonBase";
import { SubmitBaseButton } from "../../atoms/button/submit/SubmitBaseButton";
import { Text } from "@yamada-ui/react";
const Email = InputAreaDataType[1];

export const ForgotPasswordPage = () => {
    const [email, setEmail] = useState<string>("");

    return (
        <InputForm title="パスワード再設定">
            <Text fontSize="xs">登録済みのメールアドレスを入力してください</Text>
            <InputBase
                key={Email.id}
                placeholder={Email.placeholder}
                type={Email.input_type}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value);
                }}
            />
            <Text fontSize="0.7rem" marginTop="-1.25rem" color="neutral.500">
                ご登録されているメールアドレスに認証メールをお送りします
            </Text>

            <SubmitBaseButton buttonText="送信" onClick="" disabled={email === ""} />
            <LinkToFormButtonBase link="/login" buttonText="ログイン画面へ戻る" />
        </InputForm>
    );
};
