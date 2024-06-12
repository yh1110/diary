import { Flex, Image } from "@yamada-ui/react";
import React from "react";

export const MainIcon = () => {
    return (
        <>
            {/*  #TODO トップページの場合とログインの場合で分岐(Link to の先を変化) */}
            <Flex gap="2">
                <Image
                    src="https://i.pinimg.com/564x/47/7a/ed/477aed52f0a0702d5bb26c07592873f7.jpg"
                    size="3.5rem"
                    borderRadius="50%"
                />
                <Image src="./images/logo_black.png" size="16" />
            </Flex>
        </>
    );
};
