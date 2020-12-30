import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  padding: .5rem;
  font-size: 1.2rem;
`;

const MenuIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: white;
`;

const DropdownMenu = () => {
  return (
    <Container>
      <MenuIcon icon={faBars} />
    </Container>
  );
}

export default DropdownMenu;