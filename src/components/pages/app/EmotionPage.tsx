import { LineChart, LineProps } from "@yamada-ui/charts";
import { Center, Container, Heading, Loading, SkeletonText } from "@yamada-ui/react";
import React, { useMemo } from "react";

export const EmotionPage = () => {
    console.log("emotionPage");
    const data = useMemo(
        () => [
            {
                date: "6/23",
                楽しい: 90,
                うれしい: 65,
                悲しい: 65,
                わくわく: 40,
                冷静: 40,
                疲れた: 15,
            },
            {
                date: "6/24",
                楽しい: 50,
                うれしい: 52,
                悲しい: 48,
                わくわく: 65,
                冷静: 50,
                疲れた: 55,
            },
            {
                date: "6/25",
                楽しい: 160,
                うれしい: 110,
                悲しい: 65,
                わくわく: 65,
                冷静: 110,
                疲れた: 30,
            },
        ],
        []
    );

    const series: LineProps[] = useMemo(
        () => [
            { dataKey: "楽しい", color: "green.500" },
            { dataKey: "うれしい", color: "red.500" },
            { dataKey: "悲しい", color: "blue.500" },
            { dataKey: "わくわく", color: "purple.500" },
            { dataKey: "冷静", color: "orange.500" },
            { dataKey: "疲れた", color: "cyan.500" },
        ],
        []
    );

    return (
        <>
            <Center>
                <Heading marginY="xl" color="amber.500">
                    AIによるあなたの感情分析結果です
                </Heading>
            </Center>
            <Center>
                <LineChart data={data} series={series} curveType="linear" dataKey="date" w="90%" />;
            </Center>
            <Container w="90%" marginLeft="2xl">
                <Center>
                    <Loading variant="audio" size="3xl" color="yellow.500" marginRight="md" />
                    <SkeletonText lineClamp={5} startColor="amber.500" endColor="orange.500" />
                </Center>
                <Center>
                    <Loading variant="audio" size="3xl" color="yellow.500" marginRight="md" />
                    <SkeletonText lineClamp={5} startColor="amber.500" endColor="orange.500" />
                </Center>
                <Center>
                    <Loading variant="audio" size="3xl" color="yellow.500" marginRight="md" />
                    <SkeletonText lineClamp={5} startColor="amber.500" endColor="orange.500" />
                </Center>
            </Container>
        </>
    );
};
