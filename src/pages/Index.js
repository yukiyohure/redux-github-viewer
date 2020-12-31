import React, { useState } from 'react';
import IndexTemplate from '../components/templates/IndexTemplate';

const Index = () => {
  const tabs = [
    {key: 'issue', label: 'Issue'},
    {key: 'pullRequest', label: 'Pull Request'}
  ];
  const [selectedTab, changeTab] = useState('issue');
  return (
    <IndexTemplate tabs={tabs} selectedTab={selectedTab} onClick={changeTab} />
  );
}

export default Index;