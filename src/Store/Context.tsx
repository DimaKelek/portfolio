import React, {createContext, PropsWithChildren, useContext} from "react";
import {store} from "./store";

const StoreContext = createContext(store)

export const MobXProvider: React.FC<PropsWithChildren<{}>> = ({children}) => {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export const useMobXStore = () => useContext(StoreContext)