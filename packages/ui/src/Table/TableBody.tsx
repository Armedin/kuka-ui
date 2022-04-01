import clsx from 'clsx';
import styled from '@emotion/styled';
import React from 'react';
import TableLvl2Context from './TableLvl2Context';

export interface TableBodyProps {
  children?: React.ReactNode;
  className?: string;
}

const TableBodyRoot = styled('thead')({
  display: 'table-row-group',
  verticalAlign: 'inherit',
});

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  (inProps, ref) => {
    const { className, ...other } = inProps;
    return (
      <TableLvl2Context.Provider value={{ variant: 'body' }}>
        <TableBodyRoot
          className={clsx('KukuiTableBody', className)}
          ref={ref}
          {...other}
        />
      </TableLvl2Context.Provider>
    );
  }
);

TableBody.displayName = 'TableBody';

export default TableBody;
