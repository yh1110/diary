import { Header } from "../organisms/Header";

export const DefaultLayout = (props: any) => {
    const { children } = props;
    return (
        <>
            <Header isVisibleLoginButton="visible" />
            {children}
        </>
    );
};
