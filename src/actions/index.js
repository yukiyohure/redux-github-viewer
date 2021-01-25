// action type を定数で定義するメリット
// https://redux.js.org/recipes/reducing-boilerplate#actions

export const ADD_ISSUE = 'ADD_ISSUE';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const CHANGE_CHILD = 'CHANGE_CHILD';

export const addIssue = (newData) => {
  return {
    type: ADD_ISSUE,
    payload: newData
  }
}

export const showModal = ({component}) => {
  return {
    type: SHOW_MODAL,
    payload: component
  }
}

export const hideModal = () => {
  return {
    type: HIDE_MODAL
  }
}

export const insertChild = (childComponent) => {
  return {
    type: CHANGE_CHILD,
    payload: childComponent
  }
}