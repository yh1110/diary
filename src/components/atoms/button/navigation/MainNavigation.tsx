import { Avatar, Center, Flex, Text } from "@yamada-ui/react";
import React, { FC } from "react";

type mainNavigationProps = {
    navigationText: string;
    navigationImage: string;
};

export const MainNavigation: FC<mainNavigationProps> = (props) => {
    const { navigationText, navigationImage } = props;
    return (
        <Flex marginTop="md" paddingBottom="1rem">
            <Avatar src={navigationImage} marginRight="xs" size="sm" />
            <Center>
                <Text>{navigationText}</Text>
            </Center>
        </Flex>
    );
};
