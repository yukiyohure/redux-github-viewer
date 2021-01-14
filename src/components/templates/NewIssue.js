import React from 'react';
import styled from 'styled-components';
import TextInput from '../atoms/TextInput';
import TextArea from "../atoms/TextArea";
import Button from '../atoms/Button';

const Wrapper = styled.div`
  max-width: 598px;
  margin: auto;
`;

const InputSection = styled.div`
  padding: 2rem 0 1rem;
`;

const FieldLabel = styled.label`
  display: block;
  padding: .5rem 0;
`;

const Field = styled.div`
  padding: 1rem;
`;

const CloseButton = styled.a`
  cursor: pointer;
  padding: .5rem 1rem;
  font-size: 1rem;
  margin: 4px;
  min-width: 100px;
  text-align: center;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: .5rem;
  button {
    width: auto;
  }
`;


const NewIssue = () => {
  return (
    <Wrapper>
      <h2>Issueを追加</h2>
      <InputSection>
        <Field>
          <FieldLabel>タイトル</FieldLabel>
          <TextInput placeholder="タイトルを入力してください" />
        </Field>
        <Field>
          <FieldLabel>説明</FieldLabel>
          <TextArea placeholder="説明を入力してください" />
        </Field>
      </InputSection>
      <Actions>
        <Button
          hoverBackground="hoverPrimary"
          background="primary"
          textColor="white"
          shadow="primaryShadow"
          hoverShadow="hoverPrimaryShadow"
          label="作成"
        />
        <CloseButton >閉じる</CloseButton>
      </Actions>
    </Wrapper>
  );
}

export default NewIssue;