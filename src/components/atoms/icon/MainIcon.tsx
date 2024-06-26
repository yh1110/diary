import { Flex, Image } from "@yamada-ui/react";
import React, { FC, memo } from "react";

type mainIconProps = {
    onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
};
export const MainIcon: FC<mainIconProps> = memo((props) => {
    const { onClick } = props;
    console.log("meinIcon");

    return (
        <>
            {/*  #TODO トップページの場合とログインの場合で分岐(Link to の先を変化) */}
            <Flex gap="2">
                <Image
                    src="https://i.pinimg.com/564x/47/7a/ed/477aed52f0a0702d5bb26c07592873f7.jpg"
                    size="3.5rem"
                    borderRadius="50%"
                    onClick={onClick}
                    cursor="pointer"
                />
                <Image
                    src="../../images/logo_black.png" //相対パス
                    size="16"
                    onClick={onClick}
                    cursor="pointer"
                />
            </Flex>
        </>
    );
});
