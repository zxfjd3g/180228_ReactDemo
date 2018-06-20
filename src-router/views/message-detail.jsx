import React, {Component} from 'react'

const messageDetails = [
  {id: 1, title: 'message001', content: 'message content001'},
  {id: 2, title: 'message002', content: 'message content002'},
  {id: 4, title: 'message004', content: 'message content004'}
]

export default class MessageDetail extends Component {
  render () {
    const id = this.props.match.params.id * 1
    const md = messageDetails.find((md, index) => md.id===id)
    return (
      <ul>
        <li>ID: {id}</li>
        <li>Title: {md.title}</li>
        <li>Content: {md.content}</li>
      </ul>
    )
  }
}