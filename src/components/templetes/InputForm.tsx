import { Container, Heading } from "@yamada-ui/react";
import { Header } from "../organisms/Header";
import { ToggleModeButton } from "../atoms/button/ToggleModeButton";
import { FC } from "react";

export const InputForm: FC<any> = (props) => {
    console.log("inputForm");

    const { children, title } = props;

    return (
        <>
            <Header isVisibleLoginButton="hidden" />
            <ToggleModeButton />
            <Container centerContent>
                <Heading marginTop="xl" marginBottom="sm">
                    {title}
                </Heading>
                {children}
            </Container>
        </>
    );
};
