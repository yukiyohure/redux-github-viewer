import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../atoms/TextInput";
import TextArea from "../atoms/TextArea";
import Button from "../atoms/Button";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  max-width: 598px;
  margin: auto;
`;

const InputSection = styled.div`
  padding: 2rem 0 1rem;
`;

const FieldLabel = styled.label`
  display: block;
  padding: 0.5rem 0;
`;

const Field = styled.div`
  padding: 1rem;
`;

const CloseButton = styled.a`
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin: 4px;
  min-width: 100px;
  text-align: center;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.5rem;
  button {
    width: auto;
  }
`;

const NewIssue = ({ hideModal, addIssue }) => {
  const [issueTitle, setIssueTitle] = useState("");
  const [issueDescription, setIssueDescription] = useState("");

  const _addIssue = () => {
    const date = new Date();
    const payload = {
      title: issueTitle,
      explanation: issueDescription,
      status: "Open",
      author: "",
      createdAt: date,
      updatedAt: date,
    };
    addIssue(payload);
    hideModal(); // issueの追加が終わったらモーダルを閉じる
  };

  return (
    <Wrapper>
      <h2>Issueを追加</h2>
      <InputSection>
        <Field>
          <FieldLabel>タイトル</FieldLabel>
          <TextInput
            placeholder="タイトルを入力してください"
            onChange={setIssueTitle}
          />
        </Field>
        <Field>
          <FieldLabel>説明</FieldLabel>
          <TextArea
            placeholder="説明を入力してください"
            onChange={setIssueDescription}
          />
        </Field>
      </InputSection>
      <Footer>
        <Button
          hoverBackground="hoverPrimary"
          background="primary"
          textColor="white"
          shadow="primaryShadow"
          hoverShadow="hoverPrimaryShadow"
          label="作成"
          onClick={_addIssue}
        />
        <CloseButton onClick={hideModal}>閉じる</CloseButton>
      </Footer>
    </Wrapper>
  );
};

NewIssue.propTypes = {
  hideModal: PropTypes.func,
  addIssue: PropTypes.func,
};

export default NewIssue;
