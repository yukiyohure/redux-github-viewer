import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../variables';

// テキスト入力欄のスタイリング
const Text = styled.input`
  outline: none;
  border: none;
  background: none;
  padding: .5rem;
  font-size: 1rem;
  width: 100%;
`;

const Wrapper = styled.div`
  border: 1px solid ${colors.border};
  border-radius: 6px;
  width: 100%;
`;

const TextInput = ({placeholder, value}) => {
  return (
    <Wrapper>
      <Text type='text' placeholder={placeholder} value={value} />
    </Wrapper>
  );
}

TextInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string
}

export default TextInput;