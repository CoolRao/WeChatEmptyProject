
import {HomeModel} from '../../models/home.js'
let gankModel = new HomeModel()


Page({

  /**
   * 页面的初始数据
   */
  data: {
      gankLists:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    gankModel.getFuli(30,1,(data)=>{
        this.setData({
          gankLists:data
        })
    })
  },

  onShareAppMessage(){

  }
})