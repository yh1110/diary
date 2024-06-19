import React from "react";
import { LinkToLoginButton } from "../atoms/button/transition/LinkToLoginButton";
import { HeaderContent } from "../molecules/HeaderContent";
import { Flex } from "@yamada-ui/react";
import { Link } from "react-router-dom";

type headerProps = {
    isVisibleLoginButton: string;
};

export const Header = (props: headerProps) => {
    const { isVisibleLoginButton } = props;
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
                <Link to="/login">
                    <LinkToLoginButton
                        colorScheme="primary"
                        padding=""
                        margin="lg"
                        isVisible={isVisibleLoginButton}
                    />
                </Link>
            </Flex>
        </>
    );
};
