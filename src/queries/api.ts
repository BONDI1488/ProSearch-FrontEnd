import { axiosConfig as axios } from 'utils/axios';

export const Login = async (payload?: any) => {
    return axios.post(`/auth/login`, payload)
};

