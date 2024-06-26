import { FC, ReactNode } from "react";
import { HeaderForHome } from "../organisms/HeaderForHome";

type DefaultHomeLayoutProps = {
    children: ReactNode;
};

export const DefaultHomeLayout: FC<DefaultHomeLayoutProps> = (props) => {
    const { children } = props;
    return (
        <>
            <HeaderForHome isVisibleNavigation="visible" />
            {children}
        </>
    );
};
