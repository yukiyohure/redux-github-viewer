import React from 'react';
import TextInput from '../atoms/TextInput';
import styled from 'styled-components';
import Button from '../atoms/Button';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SearchForm = styled.div`
  padding: .5rem 1rem;
  width: 100%;
`;

const ActionButtons = styled.div`
  display: flex;
`;

const SearchBar = () => {
  return (
    <>
      <Wrapper>
        <h2>Issue</h2>
        <SearchForm>
          <TextInput />
        </SearchForm>
        <ActionButtons>
          <Button hoverBackground='hoverPrimary' background='primary' textColor='white' shadow='primaryShadow' hoverShadow='hoverPrimaryShadow' label='New' />
          <Button hoverBackground='hoverDanger' background='danger' textColor='white' shadow='dangerShadow' hoverShadow='hoverDangerShadow' label='Delete' />
        </ActionButtons>
      </Wrapper>
    </>
  );
}

export default SearchBar;