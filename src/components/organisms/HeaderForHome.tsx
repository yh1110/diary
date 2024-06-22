import React, { FC, useState } from "react";
import { MainIcon } from "../atoms/icon/MainIcon";
import { Box, Center, Flex, Grid, GridItem, Tab, TabPanel, Tabs } from "@yamada-ui/react";
import { UserLoginInfoIcon } from "../molecules/UserLoginInfoIcon";
import { MainNavigation } from "../atoms/button/navigation/MainNavigation";
import { DiaryPage } from "../pages/app/DiaryPage";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { currentHomeComponentAtom } from "../../store/store";

export const HeaderForHome = () => {
    const [currentHomeComponent, setCurrentHomeComponent] = useAtom(currentHomeComponentAtom);
    // const { onChangeComponent } = props;
    const [index, setIndex] = useState(0);

    const onClickNavigation = () => {
        if (index === 0) {
            setIndex(1);
            setCurrentHomeComponent("emotion");
        } else if (index === 1) {
            setIndex(0);
            setCurrentHomeComponent("diary");
        }
    };

    return (
        <>
            <Box bg="amber.500">
                <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md" bg="amber.500">
                    <GridItem colSpan={1}>
                        <Box paddingTop="sm" paddingLeft="md">
                            <MainIcon
                                onClick={() => {
                                    setIndex(0);
                                    setCurrentHomeComponent("diary");
                                }}
                            />
                        </Box>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Tabs
                            index={index}
                            onChange={onClickNavigation}
                            align="center"
                            colorScheme="gray"
                            isFitted
                        >
                            <Tab bg="amber.500">
                                <MainNavigation
                                    navigationText="日記"
                                    navigationImage="https://i.pinimg.com/564x/1f/3f/56/1f3f560186b860c18a84fa036985430b.jpg"
                                />
                            </Tab>
                            <Tab bg="amber.500">
                                <MainNavigation
                                    navigationText="感情分析"
                                    navigationImage="https://i.pinimg.com/564x/1f/3f/56/1f3f560186b860c18a84fa036985430b.jpg"
                                />
                            </Tab>
                        </Tabs>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <UserLoginInfoIcon />
                    </GridItem>
                </Grid>
            </Box>
        </>
    );
};
