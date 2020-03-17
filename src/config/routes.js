import Home from '../containers/Home/index'
import Classify from '../containers/Classify/Classify'
import Buy from '../containers/Buy/Buy'
import ToSearch from '../containers/ToSearch/ToSearch'

const routes = [
  {
    path: '/home',
    component: Home,
    exact: true
  },
  {
    path: '/classify',
    component: Classify,
    exact: true
  },
  {
    path: '/buy',
    component: Buy,
    exact: true
  },
  {
    path: '/toSearch',
    component: ToSearch,
    exact: true
  },
]

export default routes