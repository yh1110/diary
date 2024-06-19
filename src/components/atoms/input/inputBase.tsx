import { Input } from "@yamada-ui/react";

type inputBase = {
    placeholder: string;
    type: string;
};

export const inputBase = (props: inputBase) => {
    const { placeholder, type } = props;
    return (
        <Input
            focusBorderColor="blue.200"
            placeholder={placeholder}
            type={type}
        />
    );
};
