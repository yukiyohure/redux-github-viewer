import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "../../variables";

// テキストエリア入力欄のスタイリング
const TextAreaInput = styled.input`
  outline: none;
  border: none;
  background: none;
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
`;

const Wrapper = styled.div`
  border: 1px solid ${colors.border};
  border-radius: 6px;
  width: 100%;
`;

const TextArea = ({ placeholder, value }) => {
  return (
    <Wrapper>
      <TextAreaInput type="text" placeholder={placeholder} value={value} />
    </Wrapper>
  );
};

TextArea.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default TextArea;
