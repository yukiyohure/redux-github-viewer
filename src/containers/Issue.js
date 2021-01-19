import * as actions from '../actions';
import { connect } from 'react-redux';
import Issue from '../components/templates/Issue';

const mapStateToProps = (state) => { // Issueコンポーネント内で使用するstateを限定する？役目
  return {
    // stateオブジェクトから指定できるのは、src/reducers/index.js でrootReducerにまとめたときのオブジェクトのkey名？
    issue: state,
  };
}

// Issueコンポーネントからdispatchするときに、わざわざ `dispatch(actionCreator(追加したい要素))`しなくても、
// この場合だと `addIssue(追加したい要素)` でstoreにdispatchできるようになる?
const mapDispatchToProps = dispatch => {
  return {
    addIssue: (payload) => {
      dispatch(actions.addIssue(payload));
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Issue);