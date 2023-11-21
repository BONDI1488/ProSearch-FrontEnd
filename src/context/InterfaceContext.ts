import { createContext } from 'react'

const interfaceContextDefaults: any = {
    toggleSingupFormDisplayFun: () => null,
    isSignupFormDisplay: false,
    toggleDisplayProfileModalFun: () => null,
    isDisplayProfileModal: false,
    toggleDisplayHeaderModalFun: () => null,
    isDisplayHeaderModal: false,
}

export const InterfaceContext = createContext<any>(interfaceContextDefaults)