import React from "react";
import styled from "styled-components";
import { colors } from "../../variables";
import PropTypes from "prop-types";
import EditIssue from "../templates/EditIssue";

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

  th,
  td {
    padding: 0.5rem;
    text-align: left;
    min-width: 10rem;
    border-bottom: 1px solid ${colors.border};
  }
  th:first-child,
  td:first-child {
    min-width: auto;
  }
`;

const IssueContents = ({ issueData, showModal, hideModal, editIssue }) => {
  return (
    <>
      <Wrapper>
        <IssueTable>
          <thead>
            <TableRow>
              <th>
                <input type="checkbox" />
              </th>
              <th></th>
              <th>ステータス</th>
              <th>作成者</th>
              <th>作成日付</th>
              <th>更新日付</th>
            </TableRow>
          </thead>
          <tbody>
            {issueData.length ? (
              issueData.map((row) => {
                return (
                  <TableRow
                    key={row.id}
                    onClick={() =>
                      showModal({
                        component: (
                          <EditIssue
                            issue={row}
                            hideModal={hideModal}
                            editIssue={editIssue}
                          />
                        ),
                      })
                    }
                  >
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{row.title}</td>
                    <td>{row.status}</td>
                    <td>{row.author}</td>
                    <td>01-01-2021</td>
                    <td>01-01-2021</td>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <td>データがありません</td>
              </TableRow>
            )}
          </tbody>
        </IssueTable>
      </Wrapper>
    </>
  );
};

IssueContents.propTypes = {
  issueData: PropTypes.array,
  showModal: PropTypes.func,
  hideModal: PropTypes.func,
  editIssue: PropTypes.func,
};

export default IssueContents;
