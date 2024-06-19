import { Button, useColorMode, Wrap } from "@yamada-ui/react";

export const ToggleModeButton = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Wrap>
            {/* <Button onClick={() => changeColorMode("light")}>切り替え</Button> */}
            <Button onClick={toggleColorMode}>
                Switch to {colorMode === "light" ? "Dark" : "Light"} Mode
            </Button>
        </Wrap>
    );
};
