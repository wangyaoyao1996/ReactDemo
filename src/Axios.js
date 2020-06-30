import Axios from 'axios'
Axios.defaults.baseURL="api"
Axios.defaults.headers.get["Context-Type"]="application/json"
//拦截器
// // 拦截Axios发起的所有请求，通过dispatch修改isLoading为true
// Axios.interceptors.request.use(
//     config => {
//         vm.$store.dispatch('loadingStart'); // 显示loading组件
//         return config;
//     },
//     err => {
//         return Promise.reject(err);
//     });
// //拦截Axios发起的所有响应，通过dispatch修改isLoading为false
// Axios.interceptors.response.use((config)=>{
//     vm.$store.dispatch('loadingEnd');
//     return config
// })
//暴露接口
export default Axios