import { HeaderForHome } from "../organisms/HeaderForHome";

export const DefaultHomeLayout = (props: any) => {
    const { children, onChangeComponent } = props;
    return (
        <>
            <HeaderForHome />
            {children}
        </>
    );
};
