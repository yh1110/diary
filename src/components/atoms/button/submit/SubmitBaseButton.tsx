import { Button } from "@yamada-ui/react";

type buttonProps = {
    buttonText: string;
};

export const SubmitBaseButton = (props: buttonProps) => {
    const { buttonText } = props;
    return (
        <Button colorScheme="amber" fontSize="xs" w="12rem" borderRadius="50">
            {buttonText}
        </Button>
    );
};
