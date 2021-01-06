import React from 'react';
import styled from 'styled-components';
import { colors } from '../../variables';

const Wrapper = styled.div`
  overflow: scroll;
`;

const IssueTable = styled.table`
  border: 1px solid ${colors.border};
  border-radius: 6px;
  width: 100%;
`;

const TableRow = styled.tr`
  cursor: pointer;
  &:hover {
    background: rgba(198, 218, 230, 0.25);
  }

  /* 最後の行のtdにかかっているborder-bottomを削除しないと、table自体のborderとの間に変な隙間があるように見える */
  &:last-child > td {
    border-bottom: none;
  }

  th, td {
    padding: .5rem;
    text-align: left;
    min-width: 10rem;
    border-bottom: 1px solid ${colors.border};
  }
  th:first-child, td:first-child {
    min-width: auto;
  }
`;

// 仮置きデータ
const IssueRows = [
  {
    id: '1',
    title:'A bug in Top Page',
    explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    status: 'Open',
    author: '',
    createdAt: '01-01-2021',
    updatedAt: '01-01-2021'
  },
  {
    id: '2',
    title:'A problem of performance in Top Page',
    explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    status: 'Open',
    author: '',
    createdAt: '01-01-2021',
    updatedAt: '01-01-2021'
  },
  {
    id: '3',
    title:'fix layout',
    explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    status: 'Open',
    author: '',
    createdAt: '01-01-2021',
    updatedAt: '01-01-2021'
  },
];

const IssueContent = () =>{
  return (
    <>
      <Wrapper>
        <IssueTable>
          <thead>
            <TableRow>
              <th>
                <input type='checkbox' />
              </th>
              <th></th>
              <th>ステータス</th>
              <th>作成者</th>
              <th>作成日付</th>
              <th>更新日付</th>
            </TableRow>
          </thead>
          <tbody>
            {IssueRows.length ?
              IssueRows.map((row) => {
                return (
                  <TableRow key={row.id}>
                    <td>
                      <input type='checkbox' />
                    </td>
                    <td>{row.title}</td>
                    <td>{row.status}</td>
                    <td>{row.author}</td>
                    <td>{row.createdAt}</td>
                    <td>{row.updatedAt}</td>
                  </TableRow>
                )
              }) : <TableRow><td>データがありません</td></TableRow>
            }
          </tbody>
        </IssueTable>
      </Wrapper>
    </>
  )
}

export default IssueContent;