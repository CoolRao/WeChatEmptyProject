
//常用功能的封装
class CommonModel {
  constructor() {
  }

  // 从相册获取图片
  getPicture(callback) {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        callback(tempFilePaths[0])
      }
    })

  }
}

export {
  CommonModel
}