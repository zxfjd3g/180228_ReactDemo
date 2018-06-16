import React, {Component} from 'react'
import {NavLink, Route, Switch, Redirect} from 'react-router-dom'
import About from '../views/about'
import Home from '../views/home'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/*指定路由链接*/}
              <NavLink className='list-group-item' to="/about" activeClassName='activeClass'>About</NavLink>
              <NavLink className='list-group-item' to="/home" activeClassName='activeClass'>Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/*显示路由组件的位置*/}
                <Switch>{/*只显示当前匹配的某个路由组件*/}
                  <Route path='/about' component={About}/>
                  <Route path='/home' component={Home}/>
                  <Redirect to='/about'/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

/*
路由链接: NavLink
注册路由: Route
ctrl+shift+f  format
*/