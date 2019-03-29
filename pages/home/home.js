import {
  HomeModel
} from '../../models/home.js'
let gankModel = new HomeModel()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    gankLists: [],
    adConfig: {},
    toastCongif:{},
    showLoadMore:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    gankModel.getFuli(true,(data) => {
      this.setData({
        gankLists: data
      })
    })
  },

  showToast:function(){
    this.setData({
      toastCongif: {
        show: false,
        title: "打开宝箱中...",
        icon: "loading",
        iconStyle: '',
        image: "",
        imageStyle: "",
        placement: '',
        duration: 2000,
        center: false,
        mask: false
      }
    })
  },

hiddenToast:function(){
  his.setData({
    toastCongif: {
      show: false,
      title: "打开宝箱中...",
      icon: "loading",
      iconStyle: '',
      image: "",
      imageStyle: "",
      placement: '',
      duration: 2000,
      center: false,
      mask: false
    }
  })
},


  onShow: function() {
    this.setData({
      adConfig: {
        show: true,
        opacity: .5,
        zIndex: 99,
        center: true,
        locked: false,
      }
    })
  },

  hiddenAdMask:function(e){
    this.setData({
      adConfig: {
        show: false,
        opacity: .5,
        zIndex: 99,
        center: true,
        locked: false,
      }
    })
  },


  onShareAppMessage() {

  },

  onReachBottom(){
    gankModel.getFuli(false, (data) => {
      this.setData({
        gankLists: this.data.gankLists.concat(data)
      })
    })
  }
})