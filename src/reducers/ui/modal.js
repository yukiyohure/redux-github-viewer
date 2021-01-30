import { CHANGE_CHILD, HIDE_MODAL, SHOW_MODAL } from "../../actions";

const initialState = {
  isOpen: false,
  component: {},
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isOpen: true,
        component: action.payload,
      };
    case HIDE_MODAL:
      return {
        ...state,
        isOpen: false,
        component: {},
      };
    case CHANGE_CHILD:
      return {
        ...state,
        component: action.payload,
      };
    default:
      return state;
  }
};

export default modalReducer;
