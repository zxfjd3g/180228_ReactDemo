import React, {Component} from 'react'
export default class News extends Component {

  state = {
    newsArr: ['News001', 'News003', 'News005']
  }
  render () {
    return (
      <ul>
        {
          this.state.newsArr.map((news, index) => <li key={index}>{news}</li>)
        }
      </ul>
    )
  }
}