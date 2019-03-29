import {
  UserModel
} from '../../models/user.js'

import {
  CommonModel
} from '../../models/common.js'

let userModel = new UserModel()
let commonModel = new CommonModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgHeadUrl: "/images/tab/me.png",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function(options) {

  },

  clickHeadImg: function(e) {
    commonModel.getPicture((imgPath) => {
      console.log("照片临时路径...")
      this.setData({
        imgHeadUrl: imgPath

      })
    })
  },


  onShareAppMessage() {

  }
})