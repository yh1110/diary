import React from "react";
import { LoginButton } from "../atoms/button/LoginButton";
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
                <LoginButton colorScheme="primary" padding="" margin="lg" />
            </Flex>
        </>
    );
};
