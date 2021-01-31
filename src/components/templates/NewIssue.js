import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../atoms/TextInput";
import TextArea from "../atoms/TextArea";
import Button from "../atoms/Button";
import PropTypes from "prop-types";
import ErrorMessage from "../atoms/ErrorMessage";

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

// 入力チェックバリデーション
const validateRequired = (value, errorMessage) => {
  return value === "" ? errorMessage : "";
};

const NewIssue = ({ hideModal, addIssue }) => {
  const [issueTitle, setIssueTitle] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const [errors, setErrors] = useState({ title: "", description: "" });

  const onSubmit = () => {
    // バリデーションは種類ごとに関数で切り分けて、拡張性を重視してみる(1種類しかないけど)
    const titleError = validateRequired(
      issueTitle,
      "タイトルを入力してください"
    );
    const descriptionError = validateRequired(
      issueDescription,
      "説明を入力してください"
    );

    // エラーがあった場合は早期リターンでdispatchさせない
    if (titleError || descriptionError) {
      setErrors({ title: titleError, description: descriptionError });
      return;
    }

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
    hideModal(); // issueの追加処理が終わったらモーダルを閉じる
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
      <MessageContainer>
        {errors.title && <ErrorMessage message={errors.title}></ErrorMessage>}
        {errors.description && (
          <ErrorMessage message={errors.description}></ErrorMessage>
        )}
      </MessageContainer>
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

NewIssue.propTypes = {
  hideModal: PropTypes.func,
  addIssue: PropTypes.func,
};

export default NewIssue;
