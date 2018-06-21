import {ADD_COMMENT, DELETE_COMMENT} from './action-types'

// 同步添加的action
export const addComment = (comment) => ({type: ADD_COMMENT, data: comment})

// 同步删除的action
export const deleteComment = (index) => ({type: DELETE_COMMENT, data: index})