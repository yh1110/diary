import React, { createContext, useEffect, useState } from "react";
import { authRepository } from "../repositories/auth";
import { Center, Loading } from "@yamada-ui/react";
import { LoadingPage } from "../components/pages/LoadingPage";

const SessionContext = createContext({});

const SessionProvider = (props: any) => {
    const { children } = props;
    const [currentUser, setCurrentUser] = useState<any>(); //型の調整必要 #TODO

    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setSession();
    }, []);

    const setSession = async () => {
        const currentUser = await authRepository.getCurrentUser();
        setCurrentUser(currentUser);
        setIsLoading(false);
    };

    if (isLoading) return <LoadingPage />;

    return (
        <SessionContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </SessionContext.Provider>
    );
};

export { SessionContext, SessionProvider };
