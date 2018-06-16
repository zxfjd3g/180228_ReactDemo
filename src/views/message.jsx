import React, {Component} from 'react'
import {Link} from 'react-router-dom'
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


  render () {
    return (
      <ul>
        {
          this.state.messages.map((m, index) => (
            <li key={index}>
              <Link to={'/home/message/'+m.id}>{m.title}</Link>
            </li>
          ))
        }
      </ul>
    )
  }
}