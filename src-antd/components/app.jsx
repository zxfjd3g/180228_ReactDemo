import React, {Component} from 'react'
// 只打包引入组件
import {Button, Toast} from 'antd-mobile'


export default class App extends Component {
  handleClick = () => {
    Toast.success('马云宣布好消息')
  }
  render() {
    return (
      <Button type='primary' onClick={this.handleClick}>测试antd mobile</Button>
    )
  }
}