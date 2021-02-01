import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../atoms/Button";
import TextInput from "../atoms/TextInput";
import TextArea from "../atoms/TextArea";

const Wrapper = styled.div`
  max-width: 598px;
  margin: auto;
`;

const InputSection = styled.div`
  padding: 2rem 0 1rem;
`;

const MessageContainer = styled.section`
  padding: 1rem;
  min-height: 119px; /* エラー文が出てきてもボタンがしたに追いやられないよう、事前にスペースを開けておこう。*/
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

const EditIssue = ({ issue, hideModal, editIssue }) => {
  const [statusState, setStatusState] = useState(issue.status);
  const [titleState, setTitleState] = useState(issue.title);
  const [explanationState, setExplanationState] = useState(issue.explanation);

  const onChangeStatus = (e) => {
    setStatusState(e.target.value);
  };

  const onSubmit = () => {
    const date = new Date();
    const payload = {
      ...issue,
      title: titleState,
      status: statusState,
      explanation: explanationState,
      updatedAt: date,
    };
    editIssue(payload);
    hideModal();
  };

  return (
    <Wrapper>
      <h2>Issueを追加</h2>
      <InputSection>
        <Field>
          <FieldLabel>タイトル</FieldLabel>
          <TextInput
            placeholder="タイトルを入力してください"
            value={titleState}
            onChange={setTitleState}
          />
        </Field>
        <Field>
          <FieldLabel>説明</FieldLabel>
          <TextArea
            placeholder="説明を入力してください"
            value={explanationState}
            onChange={setExplanationState}
          />
        </Field>
        <Field>
          <select value={statusState} onChange={onChangeStatus}>
            <option value="open">Open</option>
            <option value="close">Close</option>
          </select>
        </Field>
      </InputSection>
      <MessageContainer></MessageContainer>
      <Footer>
        <Button
          hoverBackground="hoverPrimary"
          background="primary"
          textColor="white"
          shadow="primaryShadow"
          hoverShadow="hoverPrimaryShadow"
          label="作成"
          onClick={onSubmit}
        />
        <CloseButton onClick={hideModal}>閉じる</CloseButton>
      </Footer>
    </Wrapper>
  );
};

EditIssue.propTypes = {
  issue: PropTypes.object,
  hideModal: PropTypes.func,
  editIssue: PropTypes.func,
};

export default EditIssue;
