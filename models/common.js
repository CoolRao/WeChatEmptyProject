//常用功能的封装
class CommonModel {
  constructor() {}

  /**
   * 从相册选取图片默认为1张
   */
  getPicture(callback) {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        callback.success(tempFilePaths[0])
      },
      fail(res) {
        callback.fail()
      }
    })
  }

  /**
   * 获取用户信息和 code
   */
  getUserInfoAndCode(callback) {
    this.getUserInfo({
      success: res => {
        // 获取code
        let userInfo = res.userInfo
        this.getWeixinCode({
          success: res1 => {
            userInfo['code'] = res.code
            callback.success(userInfo)
          },
          fail: () => {
            callback.fail()
          }
        })
      },
      fail: () => {
        callback.fail()
      }
    })
  }


  /**
   * 获取 微信 code
   */
  getWeixinCode(callback) {
    wx.login({
      success: (res) => {
        console.log("获取微信 code: " + res.code)
        callback.success(res.code)
      },
      fail: (res) => {
        console.log("获取微信 code 失败： " + JSON.stringify(res))
        callback.fail()
      }
    })
  }



  /**
   * 获取用户信息
   */
  getUserInfo(callback) {
    wx.getUserInfo({
      success(res) {
        console.log("用户信息: " + JSON.stringify(res))
        callback.success(res)
      },
      fail(res) {
        console.log("用户信息失败 " + JSON.stringify(res))
        callback.fail()
      }
    })
  }





  /**
   * 检查是否有权限获取用户信息
   */
  checkHaveUserInfoPermission() {
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          console.log("有获取用户信息权限...")
          callback.success()
        } else {
          console.log("没有获取用户信息权限...")
          callback.fail()
        }
      },
      fail() {
        console.log("检查获取用户信息权限失败...")
        callback.fail()
      }
    })
  }
}



export {
  CommonModel
}