import {
  HTTP
} from '../utils/http.js'
class UserModel extends HTTP {
  constructor() {
    super()
  }

  login(username, password, success) {
    var params = {
      url: 'login',
      data:{"username":username,"password":password},
      success: success
    }
    this.request(params)
  }

  register(emial, password, success) {
    var params = {
      url: 'register',
      data: { "email": emial, "password": password },
      success: success
    }
    this.request(params)
  }


}

export {
  UserModel
}