/*
包含n个action creator函数的对象
 */
import {INCREMENT, DECREMENT} from './action-types'

// 增加action
export const increment = (number) => ({type: INCREMENT, number})

// 减少action
export const decrement = (number) => ({type: DECREMENT, number})