import { Button } from "@yamada-ui/react";
import { FC, memo } from "react";

type buttonProps = {
    buttonText: string;
    onClick: any;
    disabled: boolean | undefined;
};

export const SubmitBaseButton: FC<buttonProps> = memo((props) => {
    console.log("SubmitBaseButton");

    const { buttonText, onClick, disabled } = props;
    return (
        <Button
            colorScheme="amber"
            fontSize="xs"
            w="12rem"
            borderRadius="50"
            onClick={onClick}
            disabled={disabled}
        >
            {buttonText}
        </Button>
    );
});
