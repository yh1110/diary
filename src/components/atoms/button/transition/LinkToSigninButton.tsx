import { Button } from "@yamada-ui/react";
import { Link } from "react-router-dom";

type buttonProps = {
    colorScheme: string;
    padding: string;
    margin: string;
    buttonText: string;
};

export const LinkToSigninButton = (props: buttonProps) => {
    const { colorScheme, padding, margin, buttonText } = props;
    return (
        <Link to="/signin">
            <Button
                colorScheme={colorScheme}
                variant="outline"
                padding={padding}
                margin={margin}
            >
                {buttonText}
            </Button>
        </Link>
    );
};
