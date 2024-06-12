import { LearnMoreButton } from "../atoms/button/LearnMoreButton";
import { Flex } from "@yamada-ui/react";
import { SigninButton } from "../atoms/button/SigninButton";

export const TopButton = () => {
    return (
        <Flex gap="md" justify="center">
            <SigninButton
                colorScheme="primary"
                padding=""
                margin=""
                buttonText="sign in"
            />
            <LearnMoreButton />
        </Flex>
    );
};
