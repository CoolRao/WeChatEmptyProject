class ViewModel {
  constructor() {}

  showLoading(context) {
    console.log("展示loading....")
    context.setData({
      showLoading: true
    })
  }

  hiddenLoading(context) {
    context.setData({
      showLoading: false
    })
  }

  showToast(msg) {
    wx.showToast({
      title: msg,
    })
  }

}
export {
  ViewModel
}