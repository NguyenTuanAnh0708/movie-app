import { createContext, useState } from "react";

export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
    const [hidenLoading, setHidenLoading] = useState(null);
    return (
        <AppContext.Provider value={{ setHidenLoading, hidenLoading }}>
            {children}
        </AppContext.Provider>
    );
};
