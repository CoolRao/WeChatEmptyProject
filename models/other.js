import {HTTP} from '../utils/http.js'
class OtherModel extends HTTP {
  constructor() {
    super()
  }

  getHotList(success) {
    var params = {
      url: 'book/hot_list',
      success: success
    }
    this.request(params)
  }

}

export { OtherModel}