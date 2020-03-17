// 用来创建action对象工厂函数模块
<<<<<<< HEAD
import { reqHome, reqClassLeft } from '../aip'
import { HOME_DATA, CLASS_LEFT } from './action-types'

// 首页数据（同步）
const getHomeData = (data) => ({ type: HOME_DATA, data })
// 首页数据（异步）
export const getHomeDataAsync = () => {
  return dispatch => {
  
    return reqHome().then((res) => {
      dispatch(getHomeData(res))
    })
  }
}

// 分类左侧（同步）
const getClassLeft = (data) => ({ type: CLASS_LEFT, data })
// 分类左侧（异步）
export const getClassLeftAsync = () => {
  return dispatch => {
    return reqClassLeft().then((res) => {
      dispatch(getClassLeft(res))
    })

  }
}
=======
>>>>>>> fdc3e67d3ebf95b0df656e413e88cb93faeb6be2
