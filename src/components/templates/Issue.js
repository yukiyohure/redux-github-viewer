import React, { useState } from "react";
import SearchBar from "../organisms/SearchBar";
import styled from "styled-components";
import IssueContents from "../organisms/IssueContents";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  margin-top: 1rem;
  padding: 1rem;
`;

const Issue = ({ issueData, addIssue, showModal, hideModal }) => {
  // STOREからissueDataを受け取る
  const [searchWord, setSearchWord] = useState("");

  const filterdIssueData = issueData.filter((item) => {
    return item.title.includes(searchWord);
  });

  return (
    <>
      <Wrapper>
        <SearchBar
          showModal={showModal}
          addIssue={addIssue}
          searchWord={searchWord}
          onChange={setSearchWord}
          hideModal={hideModal}
        />
        <IssueContents issueData={filterdIssueData} />
      </Wrapper>
    </>
  );
};

Issue.propTypes = {
  issueData: PropTypes.array,
  addIssue: PropTypes.func,
  showModal: PropTypes.func,
  hideModal: PropTypes.func,
};

export default Issue;
