import { DefaultHomeLayout } from "../../templetes/DefaultHomeLayout";
import { DiaryPage } from "./DiaryPage";
import { EmotionPage } from "./EmotionPage";
import { useAtom } from "jotai";
import { currentHomeComponentAtom } from "../../../store/store";
import { useContext } from "react";
import { SessionContext } from "../../../providers/SessionProvider";
import { Navigate } from "react-router-dom";

export const HomePage = (props: any) => {
    const [currentHomeComponent] = useAtom(currentHomeComponentAtom);
    const { currentUser, setCurrentUser } = useContext<any>(SessionContext);

    const renderComponent = () => {
        switch (currentHomeComponent) {
            case "diary":
                return <DiaryPage />;
            case "emotion":
                return <EmotionPage />;
            default:
                return <DiaryPage />;
        }
    };
    if (currentUser == null) return <Navigate replace to="/login" />;

    return (
        <>
            <DefaultHomeLayout children />
            {renderComponent()}
        </>
    );
};
