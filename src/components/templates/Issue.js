import React from 'react';
import SearchBar from '../organisms/SearchBar';
import styled from 'styled-components';
import IssueContents from '../organisms/IssueContents';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  margin-top: 1rem;
  padding: 1rem;
`;

const Issue = ({issueData}) => {
  return (
    <>
      <Wrapper>
        <SearchBar />
        <IssueContents issueData={issueData} />
      </Wrapper>
    </>
  );
}

Issue.propTypes = {
  issueData: PropTypes.array,
}

export default Issue;