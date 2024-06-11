import { LearnMoreButton } from "../atoms/button/LearnMoreButton";
import { LoginButton } from "../atoms/button/LoginButton";
import { Flex } from "@yamada-ui/react";

export const TopButton = () => {
    return (
        <Flex gap="md" justify="center">
            <LoginButton colorScheme="primary" padding="" margin="" />
            <LearnMoreButton />
        </Flex>
    );
};
