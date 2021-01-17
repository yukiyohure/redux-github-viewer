export const addIssue = (newData) => {
  return {
    type: 'ADD_ISSUE',
    payload: newData
  }
}