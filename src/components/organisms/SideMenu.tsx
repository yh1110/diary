import { Accordion, AccordionItem, Box } from "@yamada-ui/react";
import { FC, memo } from "react";
import { SideMenuContentsBase } from "../atoms/card/SideMenuContentsBase";
import { mockData } from "../api/mockData";

type postContent = {
    date: string;
    content: string;
};

const mockPostData: { [key: string]: postContent[] } = mockData;

export const SideMenu: FC = memo(() => {
    console.log("sideMenu");

    return (
        <Box bg="gray.200" w="100%">
            <Accordion isMultiple isToggle w="100%">
                {Object.keys(mockPostData).map((month) => (
                    <AccordionItem key={month} label={month}>
                        <SideMenuContentsBase month={month} post_data={mockPostData[month]} />
                    </AccordionItem>
                ))}
            </Accordion>
        </Box>
    );
});
