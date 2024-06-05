import { LearnMoreButton } from "../atoms/button/LearnMoreButton";
import { LoginButton } from "../atoms/button/LoginButton";
import { Center, Flex } from "@yamada-ui/react";

export const TopButton = () => {
    return (
        <Flex gap="md" justify="center">
            <LoginButton />
            <LearnMoreButton />
        </Flex>
    );
};
