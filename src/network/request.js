import axios from 'axios'
// <<<<<<< Updated upstream
// export function request(config) {
//     const instance = axios.create({
//         baseURL: 'https://result.eolinker.com/KUkXjatd2a1d84ce9403587434d6aacece3c61de539a702?uri=',
//         timeout: 5000
//     })

//     instance.interceptors.request.use(config => {
//         return config
//     }, err => {
//         console.log(err);
//     })

//     instance.interceptors.response.use(res => {
//         return res.data
//     }, err => {
//         console.log(err);
//     })

//     return instance(config)
// }
// =======

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    // baseURL: 'https://result.eolinker.com/UAgHJWjc1ff30d30e94b557e0eba0e51b51b85856b8ac50?uri=',
    baseURL: 'http://123.60.33.16:8080/Hungry',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    // console.log(config);
    // 1.比如config中的一些信息不符合服务器的要求

    // 2.比如每次发送网络请求时, 都希望在界面中显示一个请求的图标

    // 3.某些网络请求(比如登录(token)), 必须携带一些特殊的信息
    return config
  }, err => {
    // console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  // instance(config)
  //   .then(res => {
  //     success(res)
  //   })
  //   .catch(err => {
  //     failure(err)
  //   })

  return instance(config)
}
// >>>>>>> Stashed changes
