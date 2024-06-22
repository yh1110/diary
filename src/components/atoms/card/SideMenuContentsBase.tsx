import { Card, CardBody, CardHeader, Text } from "@yamada-ui/react";
import React from "react";

export const SideMenuContentsBase = () => {
    return (
        <>
            <Card variant="outline" colorScheme="gray" size="sm" marginBottom="0.5rem">
                {/* #TODO */}
                <CardHeader>4/12</CardHeader>
                <CardBody>
                    <Text wordBreak="break-all">texttexttexttexttexttexttexttexttexttext</Text>
                </CardBody>
            </Card>
            <Card variant="outline" colorScheme="gray" size="sm" marginBottom="0.5rem">
                {/* #TODO */}
                <CardHeader>4/12</CardHeader>
                <CardBody>
                    <Text wordBreak="break-all">texttexttexttexttexttexttexttexttexttext</Text>
                </CardBody>
            </Card>
        </>
    );
};
