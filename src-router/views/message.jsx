import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'

import MessageDetail from './message-detail'

export default class Message extends Component {

  state = {
    messages: []
  }

  componentDidMount () {
    // 模拟发送异步请求获取数据
    this.intervalId = setTimeout(() => {
      const messages = [
        {id: 1, title: 'message001'},
        {id: 2, title: 'message002'},
        {id: 4, title: 'message004'}
      ]
      this.setState({
        messages
      })
    }, 1000)
  }

  componentWillUnmount () {
    clearTimeout(this.intervalId)
  }

  showDetail = (id) => {
    // 使用js实现路由跳转
    this.props.history.push('/home/message/'+id)
  }

  showDetail2 = (id) => {
    // 使用js实现路由跳转
    this.props.history.replace('/home/message/'+id)
  }


  render () {
    return (
      <div>
        <ul>
          {
            this.state.messages.map((m, index) => (
              <li key={index}>
                <Link to={'/home/message/'+m.id}>{m.title}</Link>
                <button onClick={() => {this.showDetail(m.id)}}>push查看</button>
                <button onClick={() => {this.showDetail2(m.id)}}>replace查看</button>
              </li>
            ))
          }
        </ul>
        <p>
          <button onClick={() => {this.props.history.goBack()}}>回退</button>
          <button onClick={() => {this.props.history.goForward()}}>前进</button>
        </p>
        <Route path='/home/message/:id' component={MessageDetail}/>
      </div>

    )
  }
}