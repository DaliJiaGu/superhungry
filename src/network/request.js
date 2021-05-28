import axios from 'axios'
export function request(config) {
    const instance = axios.create({
        baseURL: 'https://result.eolinker.com/KUkXjatd2a1d84ce9403587434d6aacece3c61de539a702?uri=',
        timeout: 5000
    })

    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err);
    })

    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })

    return instance(config)
}