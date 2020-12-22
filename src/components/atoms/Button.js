import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: .5rem 1rem;
  text-align: center;
  font-size: 1rem;
  border-radius: 6px;
  outline: none;
  background: ${props => props.background};
  box-shadow: 0 1px ${props => props.shadow};
`;