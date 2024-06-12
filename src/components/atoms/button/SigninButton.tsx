import { Box, Button } from "@yamada-ui/react";

type buttonProps = {
    colorScheme: string;
    padding: string;
    margin: string;
    buttonText: string;
};

export const SigninButton = (props: buttonProps) => {
    const { colorScheme, padding, margin, buttonText } = props;
    return (
        <Box>
            <Button
                colorScheme={colorScheme}
                variant="outline"
                padding={padding}
                margin={margin}
            >
                {buttonText}
            </Button>
        </Box>
    );
};
