import {
    Button,
    ButtonGroup,
    useColorMode,
    useSteps,
    Wrap,
} from "@yamada-ui/react";
import { useState } from "react";

export const ToggleModeButton = () => {
    const { colorMode, changeColorMode, toggleColorMode } = useColorMode();
    return (
        <Wrap>
            {/* <Button onClick={() => changeColorMode("light")}>切り替え</Button> */}
            <Button onClick={toggleColorMode}>
                Switch to {colorMode === "light" ? "Light" : "Dark"} Mode
            </Button>
        </Wrap>
    );
};
