import React from 'react';
import SearchBar from '../organisms/SearchBar';
import styled from 'styled-components';


const Wrapper = styled.div`
  margin-top: 1rem;
  padding: 1rem;
`;

const Issue = () => {
  return (
    <>
    <Wrapper>
      <SearchBar />
      {/*いろいろ*/}
    </Wrapper>
    </>
  );
}

export default Issue;