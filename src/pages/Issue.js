import React from 'react';
import Issue from '../components/templates/Issue';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem 1rem;
  margin: 0 auto;
  max-width: 896px;
`;

const IssuePage = () => {
  return (
    <Wrapper>
      <Issue />
    </Wrapper>
  );
}

export default IssuePage;