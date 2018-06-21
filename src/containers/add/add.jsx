import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addComment} from '../../redux/actions'

class Add extends Component {

  static proptypes = {
    addComment: PropTypes.func.isRequired
  }

  addComment = () => {
    // 收集输入数据
    const username = this.refs.username.value.trim()
    const content = this.refs.content.value.trim()
    if(!username || !content) {
      return
    }
    // 封装成comment对象
    const comment = {
      username,
      content
    }

    // 调用addComment()添加comment
    this.props.addComment(comment)

    // 清除输入
    this.refs.username.value = ''
    this.refs.content.value = ''
  }

  render () {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" ref="username"/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" ref="content"></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

// 向外暴露是包含Add的容器组件
export default connect(
  null, // 不需要传一般属性
  {addComment}
)(Add)