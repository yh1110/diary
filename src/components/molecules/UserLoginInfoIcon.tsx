import React, { memo } from "react";
import { LoginIcon } from "../atoms/icon/LoginIcon";
import { Box, Center, Flex, Text } from "@yamada-ui/react";

export const UserLoginInfoIcon = memo(() => {
    console.log("userLoginIcon");

    return (
        <Flex>
            <LoginIcon />
            <Center>
                <Text paddingLeft="md">username</Text>
            </Center>
        </Flex>
    );
});
