// 云函数入口文件
/* const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event) => {
  const wxContext = cloud.getWXContext()

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
} */



const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

exports.main = async (event) => {
  const { ENV, OPENID, APPID } = cloud.getWXContext()

  // 如果云函数所在环境为 abc，则下面的调用就会请求到 abc 环境的数据库
  const dbResult = await cloud.database().collection('test').get()

  return {
    dbResult,
    ENV,
    OPENID,
    APPID,
  }
}