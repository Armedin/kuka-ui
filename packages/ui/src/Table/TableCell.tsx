import clsx from 'clsx';
import styled from '@emotion/styled';
import React from 'react';
import TableContext from './TableContext';
import TableLvl2Context from './TableLvl2Context';

export interface TableCellProps {
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  children?: React.ReactNode;
  className?: string;
  variant?: 'head' | 'body' | 'footer';
}

const TableRowRoot = styled('td')<TableCellProps>(
  {
    display: 'table-cell',
    verticalAlign: 'inherit',
    borderBottom: '1px dashed var(--kukui-divider)',
    textAlign: 'left',
    padding: '16px',
    fontWeight: 500,
  },
  props => ({
    ...(props.variant === 'head' && {
      color: 'var(--kukui-accent-400)',
      textTransform: 'uppercase',
      fontWeight: 600,
    }),
    ...(props.align && {
      textAlign: [props.align],
      flexDirection: props.align === 'right' ? 'row-reverse' : undefined,
    }),
  })
);

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  (inProps, ref) => {
    const { className, align = 'inherit', ...other } = inProps;

    const table = React.useContext(TableContext);
    const tableLvl2 = React.useContext(TableLvl2Context);

    const isHeadCell = tableLvl2 && tableLvl2.variant === 'head';

    const component = isHeadCell ? 'th' : 'td';
    const variant = tableLvl2 && tableLvl2.variant;

    return (
      <TableRowRoot
        as={component}
        variant={variant}
        // @ts-ignore
        align={align}
        className={clsx('KukuiTableCell', className)}
        ref={ref}
        {...other}
      />
    );
  }
);

TableCell.displayName = 'TableRow';

export default TableCell;
