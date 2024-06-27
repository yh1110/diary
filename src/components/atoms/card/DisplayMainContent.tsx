import { Carousel, CarouselSlide } from "@yamada-ui/carousel";
import { Card, CardBody, CardHeader, Center, Heading, ScrollArea, Text } from "@yamada-ui/react";
import React, { FC } from "react";
import { SideMenuContentsBase } from "./SideMenuContentsBase";
import { useAtom } from "jotai";
import { postContents } from "../../../store/store";

type displayMainContentProps = {
    height: string;
};

export const DisplayMainContent: FC<displayMainContentProps> = ({ height }) => {
    const [postContentData] = useAtom(postContents);
    return (
        <>
            <Text></Text>
            <Center h={height}>
                <Card
                    variant="outline"
                    colorScheme="gray"
                    size="lg"
                    h="70vh"
                    w="70vh"
                    position="relative"
                >
                    <Heading position="absolute" top="-2xl">
                        4月
                    </Heading>
                    <ScrollArea h="70vh" type="always">
                        {postContentData.post_data.map((post_data, index) => (
                            <React.Fragment key={index}>
                                <CardHeader marginBottom="-4">{post_data.date}</CardHeader>
                                <CardBody>
                                    <Text wordBreak="break-all" marginBottom="-5" fontSize="xl">
                                        {post_data.content}
                                    </Text>
                                </CardBody>
                            </React.Fragment>
                        ))}
                    </ScrollArea>
                </Card>
            </Center>
        </>
    );
};
