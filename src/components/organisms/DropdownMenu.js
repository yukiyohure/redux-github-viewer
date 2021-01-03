import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // font-awesomeを使用するためのコンポーネント
import { faBars } from '@fortawesome/free-solid-svg-icons'; // 実際に使用するアイコンを指定するコンポーネント
import { colors } from '../../variables';
import Menu from '../molecules/Menu';

const Container = styled.div`
  padding: .5rem;
  font-size: 1.2rem;
`;

// importしたFontAwesomeIconを継承してスタイリングを行うことができる
const MenuIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: ${colors.white};
`;

const DropdownMenu = () => {
  const [isShown, setShown] = useState(false);

  const handleMenuClick = () => {
    setShown(!isShown);
  };

  return (
    <Container>
      <MenuIcon onClick={handleMenuClick} icon={faBars} />
      {isShown && <Menu onClick={handleMenuClick} />}
    </Container>
  );
}

export default DropdownMenu;