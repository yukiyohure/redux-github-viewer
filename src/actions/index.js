// action type を定数で定義するメリット
// https://redux.js.org/recipes/reducing-boilerplate#actions

export const ADD_ISSUE = 'ADD_ISSUE';

export const addIssue = (newData) => {
  return {
    type: ADD_ISSUE,
    payload: newData
  }
}