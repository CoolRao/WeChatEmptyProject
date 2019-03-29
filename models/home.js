import {
  HTTP
} from '../utils/http.js'

class HomeModel extends HTTP {
  page = 1
  size = 10
  constructor() {
    super()

  }

/**
 * isFirst 是否是第一页
 */
  getFuli(isFirst, sCallback) {
    if(isFirst){
      this.page =1
    }else{
      this.page = this.page+1
    }

    this.request({
      url: '福利/' + this.size + '/' + this.page,
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