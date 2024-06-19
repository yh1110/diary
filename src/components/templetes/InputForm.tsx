import { Container, Heading } from "@yamada-ui/react";
import { Header } from "../organisms/Header";
import { ToggleModeButton } from "../atoms/button/ToggleModeButton";

export const InputForm = (props: any) => {
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
