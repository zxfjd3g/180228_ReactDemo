/*
容器组件: 通过connect函数产生的组件, 内部包含了UI组件
 */
import {connect} from 'react-redux'
import Counter from '../components/counter'
import {increment, decrement, incrementAsync} from '../redux/actions'


export default connect(
  state => ({count: state}),
  {increment, decrement, incrementAsync}
)(Counter)
/*
向外暴露是包含UI组件Counter的容器组件
向UI组件传递一些属性:
  一般属性: connect的第一个参数(函数的返回值对象中的属性)
  函数属性: connect的第二个参数(对象中的方法属性)
 */