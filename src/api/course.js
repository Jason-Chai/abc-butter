import { get, post } from './http';
// import axios from 'axios'
var baseURL = "https://app.slinqueen.com/";

// export const login = data => post(baseURL + "login/account", QS.stringify(data), "application/x-www-form-urlencoded");

//post直接用的
export const projectlist = data => get(baseURL + "WXQuestion/api/wx/QuestionAPI/StartExam", data);


export const  pagesList = data => get("../../static/data.json", data);







//QS.stringify(data) 序列化参数 放到url使用
//"application/x-www-form-urlencoded" 这是传的响应头的  上面的注意 里面说了 post方法进行了处理




//直接进行引入api.js里面的方法 传参数 接受回调
//举例子
// import {login } from "../../../Api/api"; // 导入我们的api接口
//  getPeople(
//  {
// 	name:"小坦克",
// 	password:"3485"
//  }
//  ).then(res => {
//      console.log(res)
//  });
