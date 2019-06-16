import {
  HomeModel
} from '../../models/home.js'
var gankModel = new HomeModel()
import {
  ViewModel
} from '../../models/view.js'
var viewModel = new ViewModel()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    gankLists: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    gankModel.getFuli(true, (data) => {
      this.setData({
        gankLists: data
      })
    })
  },

  onShow: function() {
    // viewModel.showToast(this,"你好")
    // viewModel.showLoading(this,"吃了没?")
    //viewModel.showMask(this)
    //viewModel.showDialog(this,"你好","确定要死了")
    // viewModel.showLoadMore(this)
    // viewModel.loadMoreComplete(this)
    // viewModel.hiddenLoadMore(this)

  },

  onClickItem: function(event) {
    viewModel.showMask(this)
    let url = event.currentTarget.dataset.url
    console.log("url: " + url)
    this.setData({
      picUrl: url
    })
  },




  onShareAppMessage() {

  },

  onReachBottom() {
    gankModel.getFuli(false, (data) => {
      this.setData({
        gankLists: this.data.gankLists.concat(data)
      })
    })
  }
})