import { Input } from "@yamada-ui/react";
import { FC, memo } from "react";

type inputBase = {
    placeholder: string;
    type: string;
    onChange: any;
};

export const InputBase: FC<inputBase> = memo((props) => {
    console.log("inputBase");

    const { placeholder, type, onChange } = props;
    return (
        <Input
            focusBorderColor="blue.200"
            size="md"
            w="22rem"
            placeholder={placeholder}
            type={type}
            onChange={onChange}
        />
    );
});
