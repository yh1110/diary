import { Box, Button } from "@yamada-ui/react";
import { FC, memo } from "react";
import { Link } from "react-router-dom";

type buttonProps = {
    buttonText: string;
    link: string;
};

export const LinkToFormButtonBase: FC<buttonProps> = memo((props) => {
    console.log("linkToFormButtonBase");

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
});
