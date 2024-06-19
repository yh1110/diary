import { Flex, Text } from "@yamada-ui/react";
import React from "react";
import { MainIcon } from "../atoms/icon/MainIcon";
import { Link } from "react-router-dom";

export const HeaderContent = () => {
    return (
        <>
            <Flex alignItems="center" gap="6">
                <Link to="/">
                    <MainIcon />
                </Link>
                <Text>About us</Text>
            </Flex>
        </>
    );
};
