import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  white-space: nowrap;
`;

const HeaderLinks = styled.ul`
  display: flex;
`;

const links = [
  {
    text: 'Issue',
    href: '#'
  },
  {
    text:'Pull Request',
    href: '#'
  }
];

const Header = () => {
  return (
    <>
    <div>
      <Title>Github Viewer</Title>
    </div>
    <HeaderLinks>
      {links.map((link) => {
        return (
          <a href={link.href}>{link.text}</a>
        );
      })}
    </HeaderLinks>
    </>
  );
}

export default Header;
