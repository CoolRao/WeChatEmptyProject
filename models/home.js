import {
  HTTP
} from '../utils/http.js'

class HomeModel extends HTTP {
  constructor() {
    super()
  }

  getFuli(size, page, sCallback) {
    this.request({
      url: '福利/' + size + '/' + page,
      success: (data) => {
        // 如果不用箭头函数，this将指代不正确, this,将指代 model
        if (!data.error) {
          this.saveCache(data.results)
          sCallback(data.results)
        } else {
          wx.showToast({
            title: '获取数据失败',
          })
        }


      }
    })
  }

  // 存储相关信息
  saveCache(data) {

  }

}

export {
  HomeModel
}