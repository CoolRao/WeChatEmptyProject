// pages/book/book.js
import {
  OtherModel
} from '../../models/other.js'
import {
  random
} from '../../utils/util.js'
import {
  ViewModel
} from '../../models/view.js'

let otherModel = new OtherModel()
let viewModel = new ViewModel()



Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onReachBottom: function(event) {
    this.setData({

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },




  onShareAppMessage() {

  }
})