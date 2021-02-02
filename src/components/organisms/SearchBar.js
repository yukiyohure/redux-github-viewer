import React from "react";
import TextInput from "../atoms/TextInput";
import styled from "styled-components";
import Button from "../atoms/Button";
import PropTypes from "prop-types";
import NewIssue from "../templates/NewIssue";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SearchForm = styled.div`
  padding: 0.5rem 1rem;
  width: 100%;
`;

const ActionButtons = styled.div`
  display: flex;
`;

const SearchBar = ({
  addIssue,
  deleteIssue,
  searchWord,
  onChange,
  showModal,
  hideModal,
  checkedIssueIdList,
}) => {
  const onClickDelete = () => {
    checkedIssueIdList.forEach(id => {
      deleteIssue(id);
    });
  };
  return (
    <>
      <Wrapper>
        <h2>Issue</h2>
        <SearchForm>
          <TextInput
            placeholder="issue名で検索"
            value={searchWord}
            onChange={onChange}
          />
        </SearchForm>
        <ActionButtons>
          <Button
            onClick={() =>
              showModal({
                component: (
                  <NewIssue addIssue={addIssue} hideModal={() => hideModal()} />
                ),
              })
            }
            hoverBackground="hoverPrimary"
            background="primary"
            textColor="white"
            shadow="primaryShadow"
            hoverShadow="hoverPrimaryShadow"
            label="New"
          />
          <Button
            onClick={onClickDelete}
            hoverBackground="hoverDanger"
            background="danger"
            textColor="white"
            shadow="dangerShadow"
            hoverShadow="hoverDangerShadow"
            label="Delete"
          />
        </ActionButtons>
      </Wrapper>
    </>
  );
};

SearchBar.propTypes = {
  searchWord: PropTypes.string,
  onChange: PropTypes.func,
  showModal: PropTypes.func,
  hideModal: PropTypes.func,
  addIssue: PropTypes.func,
  deleteIssue: PropTypes.func,
  checkedIssueIdList: PropTypes.array,
};

export default SearchBar;
