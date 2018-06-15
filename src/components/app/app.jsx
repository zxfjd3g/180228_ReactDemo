import React, {Component} from 'react'
import Add from '../add/add'
import List from '../list/list'

export default class App extends Component {

  // 给组件对象(App的实例)设置(添加)属性
  state = {
    comments: [
      {username: 'damu', content: 'react不会!'},
      {username: 'sadamu', content: 'react真不会!'},
    ]
  }

  addComment = (comment) => {
    const {comments} = this.state
    comments.unshift(comment)
    // 更新状态
    this.setState({
      comments
    })
  }

  deleteComment = (index) => {
    const {comments} = this.state
    comments.splice(index, 1)
    this.setState({
      comments
    })
  }

  /*constructor (props) {
    super(props)
    this.state = {
      comments: [
        {username: 'damu', content: 'react不会!'},
        {username: 'sadamu', content: 'react真不会!'},
      ]
    }
  }*/

  render () {
    const {comments} = this.state
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add addComment={this.addComment}/>
          <List comments={comments} deleteComment={this.deleteComment}/>
        </div>
      </div>
    )
  }
}