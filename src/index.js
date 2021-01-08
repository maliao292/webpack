// import $ from 'jquery';
import './index.css';
import './style.less';
import './print'
// import "@babel/polyfill"
function add(a, b) {
  return a + b+1;
}

add(1, 2);


const plu = (a, b) => b - a
console.log(plu(1, 8))

const promise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log('promise')
    resolve(123456789)
  },1000)
})

// 开启HMR 功能
if(module.hot){
  // 方法会监听 ./print.js 的变化，一旦的发生变化，其他模块不会重新打包
  module.hot.accept('./print.js',function(){
    console.log('监听print 变化')
  })
}