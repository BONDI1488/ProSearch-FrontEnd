import { createContext } from 'react'

const interfaceContextDefaults: any = {
    toggleSingupFormDisplayFun: () => null,
    isSignupFormDisplay: false,
    toggleDisplayProfileModalFun: () => null,
    isDisplayProfileModal: false,
}

export const InterfaceContext = createContext<any>(interfaceContextDefaults)