import React from "react";
import {
    Center,
    Loading,
    Resizable,
    ResizableItem,
    ResizableTrigger,
    ScrollArea,
} from "@yamada-ui/react";
import { SideMenu } from "../../organisms/SideMenu";
import { DisplayMainContent } from "../../atoms/card/DisplayMainContent";

export const DiaryPage = () => {
    console.log("diaryPage");
    const height = "94vh";

    return (
        <Resizable>
            <ResizableItem h={height} bg="gray.500" defaultSize={20} maxSize={35} minSize={10}>
                <ScrollArea h={height} type="always">
                    <SideMenu />
                </ScrollArea>
            </ResizableItem>
            <ResizableTrigger />
            <ResizableItem>
                <DisplayMainContent height={height} />
            </ResizableItem>
        </Resizable>
    );
};
