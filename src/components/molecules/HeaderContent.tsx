import { Flex, Text } from "@yamada-ui/react";
import React from "react";
import { MainIcon } from "../atoms/icon/MainIcon";

export const HeaderContent = () => {
    return (
        <div>
            <Flex alignItems="center" gap="6">
                <MainIcon />
                <Text>About us</Text>
            </Flex>
        </div>
    );
};
