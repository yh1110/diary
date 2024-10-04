import { Center, Image } from "@yamada-ui/react";
import { Toptext } from "../molecules/Toptext";
import { LinkToSigninButton } from "../atoms/button/transition/LinkToSigninButton";

export const SigninArea = () => {
    return (
        <>
            <Center>
                <Image src="./images/logo_yellow.png" size="xl" />
            </Center>

            <Center>
                <Toptext />
            </Center>

            <Center>
                <LinkToSigninButton
                    colorScheme="amber"
                    padding=""
                    margin=""
                    buttonText="さっそく使ってみる"
                />
            </Center>
        </>
    );
};
