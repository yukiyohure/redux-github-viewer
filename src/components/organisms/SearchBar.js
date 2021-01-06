import React, { useState } from 'react';
import TextInput from '../atoms/TextInput';
import styled from 'styled-components';
import Button from '../atoms/Button';
import ModalWrapper from './ModalWrapper';

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
  const [isModalOpen, changeIsModalOpen] = useState(false);

  const handleClose = () => {
    changeIsModalOpen(false);
  }

  const handleOpen = () => {
    changeIsModalOpen(true);
  }

  return (
    <>
      <Wrapper>
        <ModalWrapper isOpen={isModalOpen} onRequestClose={handleClose} component={<h1>helloo</h1>} />
        <h2>Issue</h2>
        <SearchForm>
          <TextInput placeholder='issue名で検索' />
        </SearchForm>
        <ActionButtons>
          <Button onClick={handleOpen} hoverBackground='hoverPrimary' background='primary' textColor='white' shadow='primaryShadow' hoverShadow='hoverPrimaryShadow' label='New' />
          <Button hoverBackground='hoverDanger' background='danger' textColor='white' shadow='dangerShadow' hoverShadow='hoverDangerShadow' label='Delete' />
        </ActionButtons>
      </Wrapper>
    </>
  );
}

export default SearchBar;