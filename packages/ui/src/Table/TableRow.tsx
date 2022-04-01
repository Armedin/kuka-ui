import clsx from 'clsx';
import styled from '@emotion/styled';
import React from 'react';
import { styledSx, SxProps } from '@kukui/system';

export interface TableRowProps {
  children?: React.ReactNode;
  className?: string;
  sx?: SxProps;
}

const TableRowRoot = styled('tr')(
  {
    color: 'inherit',
    display: 'table-row',
    verticalAlign: 'middle',
    outline: 0,
  },
  props => ({ ...styledSx(props) })
);

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  (inProps, ref) => {
    const { className, ...other } = inProps;

    return (
      <TableRowRoot
        className={clsx('KukuiTableRow', className)}
        ref={ref}
        {...other}
      />
    );
  }
);

TableRow.displayName = 'TableRow';

export default TableRow;
