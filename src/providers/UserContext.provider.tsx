import React, {useState, useMemo, ReactNode, useEffect, useContext} from 'react'
import { InterfaceContext } from "../context";
import { axiosConfig } from 'utils/axios';
import { UserContext } from 'context/UserContext';

type UserContextProviderWrapperProps = { children: ReactNode }

function UserContextProviderWrapper({children
}: UserContextProviderWrapperProps) {
    const [authToken, setAuthToken] = useState<boolean>(false)
    const [userRole, setUserRole] = useState('')

    const values = useMemo(
        () => ({
            setAuthToken,
            authToken,
            setUserRole,
            userRole
        }),
        [authToken, userRole]
    );

    useEffect(() => {
        axiosConfig.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

        if (authToken) {
            axiosConfig.defaults.headers.common = { Authorization: `Bearer ${authToken}` };
        } else {
            const token = localStorage.getItem('token');
            axiosConfig.defaults.headers.common = { Authorization: `Bearer ${token}` };
        }
    }, [authToken]);

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProviderWrapper;