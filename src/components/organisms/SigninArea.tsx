import { Box, Flex, Grid, Image } from "@yamada-ui/react";
import { TopButton } from "../molecules/TopButton";
import { Toptext } from "../molecules/Toptext";
import { SigninButton } from "../atoms/button/SigninButton";

export const SigninArea = () => {
    return (
        <>
            <Grid></Grid>
            <Image src="./images/logo_yellow.png" />
            <Flex alignItems={`center`} justifyContent={`center`}>
                <Toptext />
            </Flex>

            <Toptext />

            <SigninButton
                colorScheme="amber"
                padding=""
                margin=""
                buttonText="さっそく使ってみる"
            />
        </>
    );
};
