/**
 * 存储整个应用周期的相关信息
 */

class UserConfig {

  saveToken(token) {
    wx.setStorageSync("token", token)
  }

  getToken() {
    return wx.getStorageSync("token")
  }

  saveUserInfo(userInfo) {
    wx.setStorageSync("userInfo", userInfo)
  }

  getUserInfo() {
    wx.getStorageSync("userInfo")
  }
}

export {
  UserConfig
}