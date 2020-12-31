import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // font-awesomeを使用するためのコンポーネント
import { faBars } from '@fortawesome/free-solid-svg-icons'; // 実際に使用するアイコンを指定するコンポーネント
import { colors } from '../../variables';

const Container = styled.div`
  padding: .5rem;
  font-size: 1.2rem;
`;

const MenuIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: ${colors.white}};
`;

const DropdownMenu = () => {
  return (
    <Container>
      <MenuIcon icon={faBars} />
    </Container>
  );
}

export default DropdownMenu;