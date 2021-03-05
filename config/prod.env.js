'use strict'
let CurBase = '';
if(process.env.BRANCH_ENV==='A'){
  CurBase = 'A'
}if(process.env.BRANCH_ENV==='B'){
  CurBase = 'B'
}if(process.env.BRANCH_ENV==='C'){
  CurBase = 'C'
}if(process.env.BRANCH_ENV==='prod'){
  CurBase = 'prod'
}
module.exports = {
  NODE_ENV: '"production"',
  // 使用webpaack  
  BASE_ENV: JSON.stringify(CurBase) || '""'
}
