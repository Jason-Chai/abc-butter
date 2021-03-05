import axiosAjax from './axiosAjax';
import md5 from 'js-md5';
import Cookie from 'js-cookie';
let util = {

};
util.ajax = axiosAjax;
util.md5 = md5;
util.Cookie = Cookie;
// 将时间戳转换成日期格式  yyyy-mm-dd
util.formatDate = function(obj) {
  var date = new Date(obj);
  var y = 1900 + date.getYear();
  var m = '0' + (date.getMonth() + 1);
  var d = '0' + date.getDate();
  return y + '-' + m.substring(m.length - 2, m.length) + '-' + d.substring(d.length - 2, d.length);
};
util.getUrlKey = function(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1]
    .replace(/\+/g, '%20')) || null
}

util.isIos = function(){
  var flag = false ;
  
  if ((navigator.userAgent.match(/(iPhone|iPod|ios|iPad)/i))) {
    flag = true
  }
  return flag;
}
export default util;
