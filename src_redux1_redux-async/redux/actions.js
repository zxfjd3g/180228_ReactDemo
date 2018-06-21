/*
包含n个action creator函数的对象
 */
import {INCREMENT, DECREMENT} from './action-types'

// 同步增加action
export const increment = (number) => ({type: INCREMENT, number})

// 同步减少action
export const decrement = (number) => ({type: DECREMENT, number})

// 异步增加action (返回一个函数)
export function incrementAsync(number) {
  return function (dispatch) {
    // 执行异步代码, 执行完成后分发一个同步action
    setTimeout(() => {
      dispatch(increment(number))
    }, 1000)
  }
}