/*
容器组件: 通过connect函数产生的组件, 内部包含了UI组件
 */
import {connect} from 'react-redux'
import Counter from '../components/counter'
import {increment, decrement} from '../redux/actions'

function mapStateToProps (state) {
  return {count: state}// 返回的对象中的所有属性都会传递给包含UI组件
}

/*function mapDispatchToProps (dispatch) {
  return { // 返回的对象中的所有方法都会传递给包含UI组件
    increment (number) {
      dispatch(increment(number))
    },
    decrement (number) {
      dispatch(decrement(number))
    }
  }
}*/

const mapDispatchToProps = {
  increment,
  decrement
}

export default connect(
  mapStateToProps, // 来向UI组件传递一般属性
  mapDispatchToProps // 来向UI组件传递函数属性
)(Counter)

/*
class App {
  render () {
    return <Counter count={} increment={} decrement={}/>
  }
}
*/
