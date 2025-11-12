"use client";

import { useUser } from "@clerk/nextjs";
import { createContext, useContext, PropsWithChildren } from "react";

type AppContextType = {
    user: any;
}

export const AppContext = createContext<AppContextType>({ user: null });

export const useAppContext = () => {
    return useContext(AppContext)
}

export const AppContextProvider = ({children}: PropsWithChildren) => {
    const { user } = useUser();
    const value = { user };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}