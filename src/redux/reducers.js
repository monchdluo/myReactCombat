// 根据pervState和action生成newState函数模块
import { combineReducers } from 'redux'
<<<<<<< HEAD
import { HOME_DATA, CLASS_LEFT } from './action-types'

const home = {}
function homeData (prevState = home, action) {
  switch (action.type) {
    case HOME_DATA:
      return action.data
    default:
      return prevState
  }
}

const classLeft = {}
function classLeftData (prevState = classLeft, action) {
  switch (action.type) {
    case CLASS_LEFT:
      return action.data
    default:
      return prevState
  }
}

export default combineReducers({
  homeData,
  classLeftData
})
=======

export default combineReducers({

})
>>>>>>> fdc3e67d3ebf95b0df656e413e88cb93faeb6be2
