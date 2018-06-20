/*
入口JS
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import App from './components/app'
import {count} from './redux/reducers'



// 创建一个store对象
const store = createStore(count) // 内部会第一次调用reducer产生初始状态


function render () {
  ReactDOM.render((
    <App store={store}/>
  ), document.getElementById('root'))
}

render() // 初始渲染

// 订阅监听(store中状态的改变)
store.subscribe(render)
