import React from 'react';
import TabHeader from '../organisms/TabHeader';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem 1rem;
  margin: 0 auto;
`;

const IndexTemplate = ({selectedTab, tabs, onClick}) => {
  return (
    <>
     <Container>
        <TabHeader tabs={tabs} selectedTab={selectedTab} onClick={onClick} />
    </Container>
    </>
  );
}

IndexTemplate.propTypes = {
  selectedTab: PropTypes.string,
  tabs: PropTypes.array,
  onClick: PropTypes.func
}

export default IndexTemplate;