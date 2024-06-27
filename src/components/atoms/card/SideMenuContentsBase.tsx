import { Card, CardBody, CardHeader, Text } from "@yamada-ui/react";
import { useAtom } from "jotai";
import React, { FC } from "react";
import { postContents } from "../../../store/store";

type postContent = {
    date: string;
    content: string;
};

type SideMenuContentsBaseProps = {
    month: string;
    post_data: postContent[];
};

export const SideMenuContentsBase: FC<SideMenuContentsBaseProps> = ({ month, post_data }) => {
    const [, setPostContents] = useAtom(postContents);

    const handleClick = (postContent: postContent) => {
        setPostContents({ month, post_data: [postContent] });
    };
    console.log("SideMenuContentsBase");

    return (
        <>
            {post_data.map((postContent, index) => (
                <Card
                    key={index}
                    variant="outline"
                    colorScheme="gray"
                    size="sm"
                    marginBottom="0.5rem"
                    onClick={() => handleClick(postContent)}
                    cursor="pointer"
                >
                    <CardHeader>{postContent.date}</CardHeader>
                    <CardBody>
                        <Text wordBreak="break-all">{postContent.content}</Text>
                    </CardBody>
                </Card>
            ))}
        </>
    );
};
