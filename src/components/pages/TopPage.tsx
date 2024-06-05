import { Flex, Image } from "@yamada-ui/react";
import { ToggleModeButton } from "../atoms/button/ToggleModeButton";
import { TopButton } from "../molecules/TopButton";
import { LoginArea } from "../organisms/LoginArea";

export const TopPage = () => {
    return (
        <>
            <ToggleModeButton />
            <Flex>
                <LoginArea />
                <Image
                    src="https://i.pinimg.com/originals/12/85/53/128553a8e81cc6e7cd1e6f38c06eeec2.jpg"
                    alt="aaa"
                    size="fit-content"
                />
            </Flex>
            {/* <img
                src="https://i.pinimg.com/originals/12/85/53/128553a8e81cc6e7cd1e6f38c06eeec2.jpg"
                alt="aaa"
            /> */}
        </>
    );
};
