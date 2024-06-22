import { Accordion, AccordionItem, Box, Text } from "@yamada-ui/react";
import React, { memo } from "react";
import { SideMenuContentsBase } from "../atoms/card/SideMenuContentsBase";

export const SideMenu = memo(() => {
    console.log("sideMenu");

    return (
        <Box bg="gray.200" w="100%">
            <Accordion isMultiple isToggle w="100%">
                <AccordionItem label="4月">
                    <SideMenuContentsBase />
                </AccordionItem>
                <AccordionItem label="5月">
                    <SideMenuContentsBase />
                </AccordionItem>
                <AccordionItem label="6月">
                    <SideMenuContentsBase />
                </AccordionItem>
                <AccordionItem label="6月">
                    <SideMenuContentsBase />
                </AccordionItem>
                <AccordionItem label="6月">
                    <SideMenuContentsBase />
                </AccordionItem>
                <AccordionItem label="6月">
                    <SideMenuContentsBase />
                </AccordionItem>
                <AccordionItem label="6月">
                    <SideMenuContentsBase />
                </AccordionItem>
                <AccordionItem label="6月">
                    <SideMenuContentsBase />
                </AccordionItem>
                <AccordionItem label="6月">
                    <SideMenuContentsBase />
                </AccordionItem>
            </Accordion>
        </Box>
    );
});
