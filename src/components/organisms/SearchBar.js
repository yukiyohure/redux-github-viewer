import React from 'react';
import TextInput from '../atoms/TextInput';
import styled from 'styled-components';
import Button from '../atoms/Button';
import PropTypes from 'prop-types';
import NewIssue from '../templates/NewIssue';

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

const SearchBar = ({searchWord, onChange, showModal, hideModal}) => {
  return (
    <>
      <Wrapper>
        <h2>Issue</h2>
        <SearchForm>
          <TextInput placeholder='issue名で検索' value={searchWord} onChange={onChange} />
        </SearchForm>
        <ActionButtons>
          <Button onClick={() => showModal({component: <NewIssue hideModal={() => hideModal()}/>})} hoverBackground='hoverPrimary' background='primary' textColor='white' shadow='primaryShadow' hoverShadow='hoverPrimaryShadow' label='New' />
          <Button hoverBackground='hoverDanger' background='danger' textColor='white' shadow='dangerShadow' hoverShadow='hoverDangerShadow' label='Delete' />
        </ActionButtons>
      </Wrapper>
    </>
  );
}

SearchBar.propTypes = {
  searchWord: PropTypes.string,
  onChange: PropTypes.func,
  showModal: PropTypes.func,
  hideModal: PropTypes.func,
};

export default SearchBar;