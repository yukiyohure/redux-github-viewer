import React, { useState } from 'react';
import SearchBar from '../organisms/SearchBar';
import styled from 'styled-components';
import IssueContents from '../organisms/IssueContents';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  margin-top: 1rem;
  padding: 1rem;
`;

const Issue = ({issueData}) => { // STOREからissueDataを受け取る
  const [searchWord, setSearchWord] = useState('');

  const filterdIssueData = issueData.filter(item => {
    return item.title.includes(searchWord);
  });

  return (
    <>
      <Wrapper>
        <SearchBar searchWord={searchWord} onChange={setSearchWord} />
        <IssueContents issueData={filterdIssueData} />
      </Wrapper>
    </>
  );
}

Issue.propTypes = {
  issueData: PropTypes.array,
}

export default Issue;