import { Flex, Grid, GridItem, Image } from "@yamada-ui/react";
import { ToggleModeButton } from "../../atoms/button/ToggleModeButton";
import { TopButton } from "../../molecules/TopButton";
import { SigninArea } from "../../organisms/SigninArea";
import { DefaultLayout } from "../../templetes/DefaultLayout";
import { InputForm } from "../../templetes/InputForm";

export const SigninPage = () => {
    return (
        <>
            <InputForm>
                <Grid
                    w="full"
                    templateColumns="repeat(2, 1fr)"
                    templateRows="repeat(3, 1fr)"
                    gap="md"
                >
                    <GridItem colSpan={1} rowStart={1}>
                        <SigninArea />
                    </GridItem>
                    <GridItem colSpan={1} rowStart={1}>
                        <Image src="./images/image1.png" alt="aaa" size="4xl" />
                    </GridItem>
                </Grid>
            </InputForm>

            <ToggleModeButton />
        </>
    );
};
