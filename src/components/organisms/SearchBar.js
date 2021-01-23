import React, { useState } from 'react';
import TextInput from '../atoms/TextInput';
import styled from 'styled-components';
import Button from '../atoms/Button';
import ModalWrapper from './ModalWrapper';
import NewIssue from '../templates/NewIssue';
import PropTypes from 'prop-types';

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

const SearchBar = ({searchWord, onChange}) => {
  // モーダル開閉のstate管理
  const [isModalOpen, changeIsModalOpen] = useState(false);
  const handleClose = () => { // モーダル閉じる
    changeIsModalOpen(false);
  }
  const handleOpen = () => { // モーダル開く
    changeIsModalOpen(true);
  }

  return (
    <>
      <Wrapper>
        <ModalWrapper isOpen={isModalOpen} onRequestClose={handleClose} component={<NewIssue />} />
        <h2>Issue</h2>
        <SearchForm>
          <TextInput placeholder='issue名で検索' value={searchWord} onChange={onChange} />
        </SearchForm>
        <ActionButtons>
          <Button onClick={handleOpen} hoverBackground='hoverPrimary' background='primary' textColor='white' shadow='primaryShadow' hoverShadow='hoverPrimaryShadow' label='New' />
          <Button hoverBackground='hoverDanger' background='danger' textColor='white' shadow='dangerShadow' hoverShadow='hoverDangerShadow' label='Delete' />
        </ActionButtons>
      </Wrapper>
    </>
  );
}

SearchBar.propTypes = {
  searchWord: PropTypes.string,
  onChange: PropTypes.func
}

export default SearchBar;