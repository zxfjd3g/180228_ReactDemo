/*
包含n个reducer函数的对象
reducer函数: 根据老的state和指定的action, 返回一个新的state
 */
import {INCREMENT, DECREMENT} from './action-types'

export function count(state = 1, action) {
  console.log('count()',state, action)
  switch (action.type) {
    case INCREMENT:
      return state + action.number
    case DECREMENT:
      return state - action.number
    default:
      return state
  }
}