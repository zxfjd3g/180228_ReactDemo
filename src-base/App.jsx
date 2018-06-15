/*
组件类模块
 */
import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'

export default class App extends Component {

  render () {
    return (
      <div>
        <img src={logo} alt="logo" style={{width:200, height: 200}}/>
        <h2 className="title">App组件标题</h2>
      </div>
    )
  }
}
