import styled from '@emotion/styled';
import clsx from 'clsx';
import React from 'react';
import TableContext from './TableContext';

export interface TableProps {
  children?: React.ReactNode;
  className?: string;
  stickyHeader?: boolean;
}

const TableRoot = styled('table')<TableProps>(
  {
    display: 'table',
    width: '100%',
    borderCollapse: 'collapse',
    borderSpacing: 0,
    fontSize: '0.785rem',
  },
  props => ({
    ...(props.stickyHeader && {
      borderCollapse: 'separate',
    }),
  })
);

const Table = React.forwardRef<HTMLTableElement, TableProps>((inProps, ref) => {
  const { className, stickyHeader, ...other } = inProps;

  const table = React.useMemo(() => ({ stickyHeader }), [stickyHeader]);

  return (
    <TableContext.Provider value={table}>
      <TableRoot
        className={clsx('KukuiTable', className)}
        ref={ref}
        {...other}
      />
    </TableContext.Provider>
  );
});

Table.displayName = 'Table';

export default Table;
