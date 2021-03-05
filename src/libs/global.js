const  base_env = process.env.BASE_ENV;
console.log(base_env)
let BASEURL = '';
if(base_env==='A'){
    BASEURL=''
}
if(base_env==='B'){
    BASEURL='http://new.shoujinwang.cn/'
}
if(base_env==='C'){
    BASEURL=''
}
if(base_env==='prod'){
    BASEURL='http://www.shoujinwang.com/'
}
if(base_env=='base'||base_env==''){
    BASEURL='http://new.shoujinwang.cn/'
}
export default BASEURL