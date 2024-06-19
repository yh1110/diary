import { Box, Button } from "@yamada-ui/react";

type buttonProps = {
    colorScheme: string;
    padding: string;
    margin: string;
    isVisible: any; //#TODO
};

export const LinkToLoginButton = (props: buttonProps) => {
    const { colorScheme, padding, margin, isVisible } = props;
    return (
        <Box>
            <Button
                colorScheme={colorScheme}
                variant="outline"
                padding={padding}
                margin={margin}
                visibility={isVisible || "visible"}
            >
                Log In
            </Button>
        </Box>
    );
};
