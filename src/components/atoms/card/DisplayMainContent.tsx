import { Carousel, CarouselSlide } from "@yamada-ui/carousel";
import { Card, CardBody, CardHeader, Center, Heading, ScrollArea, Text } from "@yamada-ui/react";
import React, { FC } from "react";
import { SideMenuContentsBase } from "./SideMenuContentsBase";

type displayMainContentProps = {
    height: string;
};

export const DisplayMainContent: FC<displayMainContentProps> = (props) => {
    const { height } = props;
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
                        {/* #TODO */}
                        <CardHeader marginBottom="-4">4/12</CardHeader>
                        <CardBody>
                            <Text wordBreak="break-all" marginBottom="-5" fontSize="xl">
                                texttexttexttexttexttexttexttexttexttext
                            </Text>
                        </CardBody>
                        <CardBody>
                            <Text wordBreak="break-all" marginBottom="-5" fontSize="xl">
                                texttexttexttexttexttexttexttexttexttext 今日は雨
                            </Text>
                        </CardBody>
                        <CardBody>
                            <Text wordBreak="break-all" marginBottom="-5" fontSize="xl">
                                texttexttexttexttexttexttexttexttexttext
                            </Text>
                            <Text wordBreak="break-all" marginBottom="-5" fontSize="xl">
                                texttexttexttexttexttexttexttexttexttext
                            </Text>
                        </CardBody>
                        <CardBody>
                            <Text wordBreak="break-all" marginBottom="-5" fontSize="xl">
                                texttexttexttexttexttexttexttexttexttext
                            </Text>
                            <Text wordBreak="break-all" marginBottom="-5" fontSize="xl">
                                texttexttexttexttexttexttexttexttexttext
                            </Text>
                        </CardBody>
                        <CardBody>
                            <Text wordBreak="break-all" marginBottom="-5" fontSize="xl">
                                texttexttexttexttexttexttexttexttexttext
                            </Text>
                            <Text wordBreak="break-all" marginBottom="-5" fontSize="xl">
                                texttexttexttexttexttexttexttexttexttext
                            </Text>
                        </CardBody>
                        <CardBody>
                            <Text wordBreak="break-all" marginBottom="-5" fontSize="xl">
                                texttexttexttexttexttexttexttexttexttext
                            </Text>
                            <Text wordBreak="break-all" marginBottom="-5" fontSize="xl">
                                texttexttexttexttexttexttexttexttexttext
                            </Text>
                        </CardBody>
                        <CardBody>
                            <Text wordBreak="break-all" marginBottom="-5" fontSize="xl">
                                texttexttexttexttexttexttexttexttexttext
                            </Text>
                            <Text wordBreak="break-all" marginBottom="-5" fontSize="xl">
                                texttexttexttexttexttexttexttexttexttext
                            </Text>
                        </CardBody>
                        <CardBody>
                            <Text wordBreak="break-all" marginBottom="-5" fontSize="xl">
                                texttexttexttexttexttexttexttexttexttext
                            </Text>
                            <Text wordBreak="break-all" marginBottom="-5" fontSize="xl">
                                texttexttexttexttexttexttexttexttexttext
                            </Text>
                        </CardBody>
                    </ScrollArea>
                </Card>
            </Center>
        </>

        // <Carousel>
        //     <CarouselSlide bg="primary">
        //         <SideMenuContentsBase />
        //     </CarouselSlide>
        // </Carousel>
    );
};
