import React from 'react';
import styled from 'styled-components';
import { colors } from '../../variables';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: absolute;
  right: 20px;
  width: 200px;
  padding: .5rem;
  color: ${colors.defaultText};
  border-radius: 2px;
  margin-top: 1rem;
  background: ${colors.white};
  box-shadow: rgba(51, 51, 51, 0.15) 1px 1px 4px 1px;
`;

const MenuLinks = [
  {key: 'top', label: 'Top', to:'/'},
  {key: 'profile', label: 'Your Profile', to:'/profile'},
  {key: 'issue', label: 'Issue', to:'/issue'},
  {key: 'pullrequest', label: 'Pull Request', to:'/pull-request'},
];

const MenuItem = styled.li`
  a {
    color: ${colors.defaultText};
    font-size: 1rem;
    padding: .5rem;
    display: block;
  }
`;

const Menu = ({onClick}) => {
  return (
    <Wrapper>
      <ul>
        {MenuLinks.map(({key, label, to}) => {
          return (
            <MenuItem key={key}>
              <Link to={to} onClick={onClick}>{label}</Link>
            </MenuItem>
          );
        })}
      </ul>
    </Wrapper>
  );
}

Menu.propTypes = {
  onClick: PropTypes.func
}

export default Menu;