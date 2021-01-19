import React from 'react';
import SearchBar from '../organisms/SearchBar';
import styled from 'styled-components';
import IssueContent from '../organisms/IssueContents';

const Wrapper = styled.div`
  margin-top: 1rem;
  padding: 1rem;
`;

const Issue = (props) => {
  console.log(props); // なぜstoreを取得できない？？？
  return (
    <>
    <Wrapper>
      <SearchBar />
      <IssueContent />
    </Wrapper>
    </>
  );
}

export default Issue;