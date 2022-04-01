import clsx from 'clsx';
import styled from '@emotion/styled';
import React from 'react';
import TableLvl2Context from './TableLvl2Context';

export interface TableHeadProps {
  children?: React.ReactNode;
  className?: string;
}

const TableHeadRoot = styled('thead')({
  display: 'table-header-group',
  verticalAlign: 'bottom',
});

const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeadProps>(
  (inProps, ref) => {
    const { className, ...other } = inProps;
    return (
      <TableLvl2Context.Provider value={{ variant: 'head' }}>
        <TableHeadRoot
          className={clsx('KukuiTableHead', className)}
          ref={ref}
          {...other}
        />
      </TableLvl2Context.Provider>
    );
  }
);

TableHead.displayName = 'TableHead';

export default TableHead;
