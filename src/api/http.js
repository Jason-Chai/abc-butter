import axios from 'axios';
import QS from 'qs'; //用来序列号post类型的数据

// import { message } from 'ant-design-vue' //全局提示插件
import router from '@/router';

axios.defaults.timeout = 10000;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

export function setToken(token) {
  axios.defaults.headers.common["Authorization"] = "Bearer" + token;
}

/**
 * get 方法
 * @param {String} url
 * @param {Object} params
 */

export function get(url, params) {
  console.log(url, params);
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params,
    }).then(res => checkLogin(res))
      .then(res => { resolve(res); })
      .catch(err => { reject(err); });
  });
}


/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params, contentType) {
  // console.log(contentType ? contentType: 'application/json')
  console.log(url, params);
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, {
        headers: {
          "Content-Type": contentType ? contentType : "application/json",
        },
      })
      .then(res => checkLogin(res))
      .then(res => {
        if (res.data.code == 0) {
          resolve(res);
        } else {
          console.log(res);
          // message.error(res.data.msg);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

/**
 * put方法，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function put(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .put(url, params)
      .then(res => checkLogin(res))
      .then(res => {
        resolve(res);
        // Loading.service(true).close();
        //  Message({message: '请求成功', type: 'success'});
      })
      .catch(err => {
        reject(err);
        // Loading.service(true).close();
        // Message({message: '加载失败', type: 'error'});

        message.error("加载失败");
      });
  });
}

/**
 * delete
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function deletedata(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, params)
      .then(res => checkLogin(res))
      .then(res => {
        resolve(res);
        // Loading.service(true).close();
        //  Message({message: '请求成功', type: 'success'});
      })
      .catch(err => {
        reject(err);
        // Loading.service(true).close();
        // Message({message: '加载失败', type: 'error'});
        message.error("加载失败");
      });
  });
}

function checkLogin(res) {
  // console.log(res)
  // res = JSON.parse(res)
  console.log(res.data);
  if (res.data.code === 401) {
    message.error(res.data.msg);
    router.push({
      //核心语句
      path: "/login", //跳转的路径
    });
    return false;
  } else if (res.data.code === 403) {
    message.error("权限不足");
    return false;
  } else if (res.data.code === 500) {
    message.error("服务器内部错误");
    return false;
  } else {
    return res;
  }
}

  // function parseJSON(response) {
  //   return response.json();
  // }
