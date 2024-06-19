import { Box, Button } from "@yamada-ui/react";
import { Link } from "react-router-dom";

type buttonProps = {
    buttonText: string;
    link: string;
};

export const LinkToFormButtonBase = (props: buttonProps) => {
    const { link, buttonText } = props;
    return (
        <Link to={link}>
            <Box marginBottom="-md">
                <Button colorScheme="amber" variant="link" size="xs">
                    {buttonText}
                </Button>
            </Box>
        </Link>
    );
};
