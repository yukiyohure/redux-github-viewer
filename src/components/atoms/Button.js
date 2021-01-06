import React from 'react';
import styled from 'styled-components';
import { colors } from '../../variables';
import PropTypes from 'prop-types';

const BaseButton = styled.button`
  cursor: pointer;
  border: none;
  padding: .5rem 1rem;
  margin: 4px;
  text-align: center;
  font-size: 1rem;
  border-radius: 6px;
  outline: none;
  background: ${({background}) => colors[background]};
  box-shadow: 0 1px ${({shadow}) => colors[shadow]};
  color: ${({textColor}) => colors[textColor]};
  width: 100%;
  min-width: 100px;
  font-weight: bold;
  &:hover {
    background: ${({hoverBackground}) => colors[hoverBackground]};
    box-shadow: 0 1px ${({hoverShadow}) => colors[hoverShadow]};
  }
  &:active {
    box-shadow: none;
    transform: translateY(1px);
  }
`;


const Button = ({textColor, background, hoverBackground, shadow, hoverShadow, label, onClick}) => {
  return (
    <BaseButton
      textColor={textColor}
      background={background}
      hoverBackground={hoverBackground}
      shadow={shadow}
      hoverShadow={hoverShadow}
      onClick={() => onClick()}
    >{label}</BaseButton>
  );
}

Button.propTypes = {
  textColor: PropTypes.string,
  background: PropTypes.string,
  hoverBackground: PropTypes.string,
  shadow: PropTypes.string,
  hoverShadow: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
}


export default Button;