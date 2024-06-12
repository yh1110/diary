import { Box, Button } from "@yamada-ui/react";

type buttonProps = {
    colorScheme: string;
    padding: string;
    margin: string;
};

export const LinkToLoginButton = (props: buttonProps) => {
    const { colorScheme, padding, margin } = props;
    return (
        <Box>
            <Button
                colorScheme={colorScheme}
                variant="outline"
                padding={padding}
                margin={margin}
            >
                Log In
            </Button>
        </Box>
    );
};
