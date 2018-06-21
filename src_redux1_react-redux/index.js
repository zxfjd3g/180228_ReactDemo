/*
入口JS
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './containers/app'
import {count} from './redux/reducers'



// 创建一个store对象
const store = createStore(count) // 内部会第一次调用reducer产生初始状态


  ReactDOM.render((
    <Provider store={store}>
      <App/>
    </Provider>

  ), document.getElementById('root'))
