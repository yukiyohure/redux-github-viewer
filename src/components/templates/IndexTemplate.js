import React from 'react';
import TabHeader from '../organisms/TabHeader';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Issue from './Issue';
import PullRequest from './PullRequest';

const Container = styled.div`
  padding: 2rem 1rem;
  margin: 0 auto;
`;

// 実際に表示するcomponentの配列
const tabContents = [
  {key: 'issue' , component: <Issue />},
  {key: 'pullRequest', component: <PullRequest />}
];

const IndexTemplate = ({selectedTab, tabs, onClick}) => {
  return (
    <>
     <Container>
        <TabHeader tabs={tabs} selectedTab={selectedTab} onClick={onClick} />
        {tabContents.map((tabContent) => {
          return tabContent.key === selectedTab ? tabContent.component : <></>;
        })}
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