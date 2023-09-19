import React from 'react'
import { Table as AntdTable } from 'antd';
import styled from 'styled-components';
import { THEME } from '../theme';

export const Table = ({ columns, data, footer, components, pagination, rowKey }) => {
  return (

    <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
      <StyledTable footer={footer} columns={columns} dataSource={data} key={rowKey} components={components} bordered={true} pagination={pagination} />
    </div>

  )
}

export const DeleteButtonWrapper = styled.div`
  opacity: 0;
  transition:0.5s;
`;

const StyledTable = styled(AntdTable)`
/* width:100% !important; */
tr{
  transition:0.5s;
}
tr:hover ${DeleteButtonWrapper} {
    opacity: 1;
  }
.ant-table-thead {
    background: #79FF6D !important;
    font-size:20px;
  }
  .ant-table-tbody {
    background: ${THEME.white} !important;
    font-size:20px;
  }
  & .ant-table-thead > tr >th{
    color: black;
    font-weight: 600;
    background: transparent;
    text-align:center !important;
  }
`;

