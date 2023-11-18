import React, {useState, useMemo, ReactNode} from 'react'
import { InterfaceContext } from "../context";

type InterfaceContextProviderWrapperProps = { children: ReactNode }

function InterfaceContextProviderWrapper({
    children
                                         }: InterfaceContextProviderWrapperProps) {
    const [isSignupFormDisplay, toggleSingupFormDisplay] = useState<boolean>(false)

    const values = useMemo(
        () => ({
            toggleSingupFormDisplay,
            isSignupFormDisplay,
        }),
        [isSignupFormDisplay]
    );

    return (
        <InterfaceContext.Provider value={values}>
            {children}
        </InterfaceContext.Provider>
    )
}

export default InterfaceContextProviderWrapper;