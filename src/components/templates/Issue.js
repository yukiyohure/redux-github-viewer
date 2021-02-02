import React, { useState } from "react";
import SearchBar from "../organisms/SearchBar";
import styled from "styled-components";
import IssueContents from "../organisms/IssueContents";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  margin-top: 1rem;
  padding: 1rem;
`;

const Issue = ({
  issueData,
  addIssue,
  editIssue,
  deleteIssue,
  showModal,
  hideModal,
}) => {
  // searchBarとIssueContentsのコンポーネントで扱うstateなので親であるIssueで管理してあげる
  const [searchWord, setSearchWord] = useState("");
  // このcheckBoxの状態も、searchBarのdeleteボタンとIssueContentのcheckBoxの2つの子コンポーネントで使用するのでここで管理
  const [checkedIssueIdList, setCheckedIssueIdList] = useState([]);

  const filterdIssueData = issueData.filter((item) => {
    return item.title.includes(searchWord);
  });

  return (
    <>
      <Wrapper>
        <SearchBar
          showModal={showModal}
          addIssue={addIssue}
          deleteIssue={deleteIssue}
          searchWord={searchWord}
          onChange={setSearchWord}
          hideModal={hideModal}
          checkedIssueIdList={checkedIssueIdList}
        />
        <IssueContents
          issueData={filterdIssueData}
          showModal={showModal}
          hideModal={hideModal}
          editIssue={editIssue}
          checkedIssueIdList={checkedIssueIdList}
          setCheckedIssueIdList={setCheckedIssueIdList}
        />
      </Wrapper>
    </>
  );
};

Issue.propTypes = {
  issueData: PropTypes.array,
  addIssue: PropTypes.func,
  editIssue: PropTypes.func,
  deleteIssue: PropTypes.func,
  showModal: PropTypes.func,
  hideModal: PropTypes.func,
};

export default Issue;
