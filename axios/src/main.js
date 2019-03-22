import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'

import router from './router'
import store from './store'

Axios.defaults.baseURL = 'https://axios-ea62f.firebaseio.com';
Axios.defaults.headers.common['Authorization'] = 'derp';
Axios.defaults.headers.get['Accepts'] = 'application.json';


const requestInterceptor = Axios.interceptors.request.use(config => {
  // request config manipuleren vóór het doorgeven/ophalen
  console.log('request interceptor', config);
  return config;
});

const responseInterceptor = Axios.interceptors.response.use(res => {
  // response config manipuleren vóór de response terug gegeven wordt
  console.log('response interceptor', res);
  return res;
});

// Interceptors blokkeren:

Axios.interceptors.request.eject(requestInterceptor);
Axios.interceptors.response.eject(responseInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
