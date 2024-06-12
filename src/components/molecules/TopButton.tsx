import { LearnMoreButton } from "../atoms/button/LearnMoreButton";
import { Flex } from "@yamada-ui/react";
import { LinkToSigninButton } from "../atoms/button/transition/LinkToSigninButton";

export const TopButton = () => {
    return (
        <Flex gap="md" justify="center">
            <LinkToSigninButton
                colorScheme="primary"
                padding=""
                margin=""
                buttonText="sign in"
            />
            <LearnMoreButton />
        </Flex>
    );
};
