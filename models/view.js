// 注意这个导出的语法，es不同版本到处写法不一致
import
toastConfigs
from '../config/toast-nav.js'
import
dialogConfigs
from '../config/dialog-nav.js'
import
maskConfigs
from '../config/mask-nav.js'
import
loadMoreConfigs
from '../config/loadmore-nav.js'


//封装常用 加载状态
class ViewModel {
  constructor() {}
  /**
   * 展示加载状态
   */
  showLoading(context, msg) {
    toastConfigs[2].config.show = true
    if (msg) {
      toastConfigs[2].config.title = msg
    }
    context.setData({
      loadingConfig: toastConfigs[2].config
    })
  }


  /**
   * 关闭加载状态
   */
  hiddenLoading(context) {
    toastConfigs[2].config.show = false
    context.setData({
      loadingConfig: toastConfigs[2].config
    })
  }

  /**
   * 展示 toast
   */
  showToast(context, msg) {
    toastConfigs[0].config.show = true
    toastConfigs[0].config.title = msg
    context.setData({
      toastConfig: toastConfigs[0].config
    })
  }



  /**
   * 显示 mask
   */
  showMask(context) {
    maskConfigs[0].config.show = true
    context.setData({
      maskConfig: maskConfigs[0].config
    })
  }

  /**
   * 关闭 mask
   */

  hiddenToast(context) {
    maskConfigs[0].config.show = false
    context.setData({
      maskConfig: toastConfigs[0].config
    })
  }


  /**
   * 显示dialog
   */
  showDialog(context, title, content) {
    dialogConfigs[0].config.show = true
    if (title) {
      dialogConfigs[0].config.title = title
    }
    if (content) {
      dialogConfigs[0].config.content = content
    }
    context.setData({
      dialogConfig: dialogConfigs[0].config
    })
  }


  /**
   * 关闭dialog
   */
  hiddenDialog(context) {
    dialogConfigs[0].config.show = false
    context.setData({
      dialogConfig: dialogConfigs[0].config
    })
  }

  /**
   * 显示加载更多
   */

  showLoadMore(context) {
    context.setData({
      loadMoreConfig: loadMoreConfigs[0].config[0]
    })
  }

  /**
   * 关闭加载更多
   */
  hiddenLoadMore(context) {
    loadMoreConfigs[0].config[0].show = false
    context.setData({
      loadMoreConfig: loadMoreConfigs[0].config[0]
    })
  }



  /**
   * 没有更多数据了
   */
  loadMoreComplete(context) {
    context.setData({
      loadMoreConfig: loadMoreConfigs[0].config[1]
    })
  }


}
export {
  ViewModel
}