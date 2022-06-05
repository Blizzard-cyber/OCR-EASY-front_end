import axiosInstance from './index'

const axios = axiosInstance

export const getcontext = () => { return axios.get(`http://localhost:8000/api/show_context/`) }

export const postimg = (img) => { return axios.post(`http://localhost:8000/api/oce_rco/`, { 'img': img }) }