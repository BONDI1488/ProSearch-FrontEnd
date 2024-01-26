import React, {useState, useMemo, ReactNode} from 'react'
import { InterfaceContext } from "../context";
import {bool} from "yup";

type InterfaceContextProviderWrapperProps = { children: ReactNode }

function InterfaceContextProviderWrapper({
    children
                                         }: InterfaceContextProviderWrapperProps) {
    const [isSignupFormDisplay, toggleSingupFormDisplay] = useState<boolean>(false)
    const [isDisplayProfileModal, toggleIsDisplayProfileModal] = useState<boolean>(false)
    const [isDisplayHeaderModal, toggleDisplayHeaderModal] = useState<boolean>(false)

    const toggleSingupFormDisplayFun = () => {
        toggleSingupFormDisplay(!isSignupFormDisplay)
    }

    const toggleDisplayProfileModalFun = () => {
        toggleIsDisplayProfileModal(!isDisplayProfileModal)
    }

    const toggleDisplayHeaderModalFun = () => {
        toggleDisplayHeaderModal(!isDisplayHeaderModal)
    }

    const values = useMemo(
        () => ({
            toggleSingupFormDisplayFun,
            isSignupFormDisplay,
            toggleDisplayProfileModalFun,
            isDisplayProfileModal,
            toggleDisplayHeaderModalFun,
            isDisplayHeaderModal
        }),
        [isSignupFormDisplay, isDisplayProfileModal, isDisplayHeaderModal]
    );

    return (
        <InterfaceContext.Provider value={values}>
            {children}
        </InterfaceContext.Provider>
    )
}

export default InterfaceContextProviderWrapper;