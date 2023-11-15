import { createContext } from 'react'

const interfaceContextDefaults: any = {
    toggleSingupFormDisplay: () => null,
    isSignupFormDisplay: false,
}

export const InterfaceContext = createContext<any>(interfaceContextDefaults)