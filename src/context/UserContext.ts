import { createContext } from 'react'

const userContextDefaults: any = {
   setAuthToken: () => null,
    authToken: '',
    setUserRole: () => null,
    userRole: '',
}

export const UserContext = createContext<any>(userContextDefaults)