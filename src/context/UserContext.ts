import { createContext } from 'react'

const userContextDefaults: any = {
   setAuthToken: () => null,
    authToken: '',
}

export const UserContext = createContext<any>(userContextDefaults)