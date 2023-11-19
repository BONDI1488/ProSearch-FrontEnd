import React, {useState, useMemo, ReactNode} from 'react'
import { InterfaceContext } from "../context";

type InterfaceContextProviderWrapperProps = { children: ReactNode }

function InterfaceContextProviderWrapper({
    children
                                         }: InterfaceContextProviderWrapperProps) {
    const [isSignupFormDisplay, toggleSingupFormDisplay] = useState<boolean>(false)

    const toggleSingupFormDisplayFun = () => {
        toggleSingupFormDisplay(!isSignupFormDisplay)
    }

    const values = useMemo(
        () => ({
            toggleSingupFormDisplayFun,
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