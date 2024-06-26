import React, { FC, ReactNode } from "react";
import { HeaderForHome } from "../organisms/HeaderForHome";

type SettingLayoutProps = {
    children: ReactNode;
};

export const SettingLayout: FC<SettingLayoutProps> = (props) => {
    const { children } = props;
    return (
        <>
            <HeaderForHome isVisibleNavigation="hidden" />
            {children}
        </>
    );
};
