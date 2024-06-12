import React from "react";
import { LinkToLoginButton } from "../atoms/button/transition/LinkToLoginButton";
import { HeaderContent } from "../molecules/HeaderContent";
import { Flex } from "@yamada-ui/react";

export const Header = () => {
    return (
        <>
            <Flex
                bg="amber.500"
                justifyContent="space-between"
                w="full"
                h="16"
                alignItems="center"
            >
                <HeaderContent />
                <LinkToLoginButton
                    colorScheme="primary"
                    padding=""
                    margin="lg"
                />
            </Flex>
        </>
    );
};
