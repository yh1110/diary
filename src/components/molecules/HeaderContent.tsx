import { Flex, Text } from "@yamada-ui/react";
import React from "react";
import { MainIcon } from "../atoms/icon/MainIcon";

export const HeaderContent = () => {
    return (
        <>
            <Flex alignItems="center" gap="6">
                <MainIcon />
                {/* #TODO Text->link to */}
                <Text>About us</Text>
            </Flex>
        </>
    );
};
