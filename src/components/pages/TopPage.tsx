import { Flex, Grid, GridItem, Image } from "@yamada-ui/react";
import { ToggleModeButton } from "../atoms/button/ToggleModeButton";
import { TopButton } from "../molecules/TopButton";
import { LoginArea } from "../organisms/LoginArea";
import { DefaultLayout } from "../templetes/DefaultLayout";

export const TopPage = () => {
    return (
        <>
            <DefaultLayout>
                <Grid
                    w="full"
                    templateColumns="repeat(2, 1fr)"
                    templateRows="repeat(3, 1fr)"
                    gap="md"
                >
                    <GridItem colSpan={1} rowStart={1}>
                        <Grid templateRows="repeat(3, 3fr)">
                            <GridItem rowStart={2}>
                                <LoginArea />
                            </GridItem>
                        </Grid>
                    </GridItem>
                    <GridItem colSpan={1} rowStart={1}>
                        <Image src="./images/image1.png" alt="aaa" size="4xl" />
                    </GridItem>
                </Grid>
            </DefaultLayout>

            <ToggleModeButton />

            <Grid
                w="full"
                templateColumns="repeat(4, 1fr)"
                templateRows="repeat(3, 1fr)"
                gap="md"
            >
                <GridItem
                    colSpan={2}
                    w="full"
                    minH="4xs"
                    rounded="md"
                    bg="primary"
                />

                <GridItem
                    colSpan={2}
                    rowSpan={3}
                    w="full"
                    minH="4xs"
                    rounded="md"
                    bg="secondary"
                />

                <GridItem
                    rowStart={2}
                    rowEnd={4}
                    w="full"
                    minH="4xs"
                    rounded="md"
                    bg="warning"
                />

                <GridItem
                    colStart={2}
                    colEnd={3}
                    rowStart={2}
                    rowEnd={4}
                    w="full"
                    minH="4xs"
                    rounded="md"
                    bg="danger"
                />
            </Grid>
            {/* <img
                src="https://i.pinimg.com/originals/12/85/53/128553a8e81cc6e7cd1e6f38c06eeec2.jpg"
                alt="aaa"
            /> */}
        </>
    );
};
