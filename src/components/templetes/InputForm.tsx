import { Header } from "../organisms/Header";

const inputArea = [
    { type: "name", placeholder: "ユーザーネーム" },
    { type: "email", placeholder: "メールアドレス" },
    { type: "datetime-local", placeholder: "生年月日" },
    { type: "password", placeholder: "パスワード" },
    { type: "password", placeholder: "パスワード確認" },
];
export const InputForm = (props: any) => {
    const { children } = props;

    return (
        <>
            <Header isVisibleLoginButton="hidden" />
            {children}
        </>
    );
};
