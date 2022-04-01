import styled from '@emotion/styled';
import React from 'react';
import { ArrowDownSolid } from '../lib';

export interface TableSortableLabelProps {
  active?: boolean;
  children?: React.ReactNode;
  direction?: 'asc' | 'desc';
  onClick?(): void;
}

const TableSortableLabelRoot = styled('span')<TableSortableLabelProps>(
  {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'stretch',
    flexDirection: 'inherit',
    position: 'relative',
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    ['&:hover .KukuiSortableLabelIcon']: {
      opacity: 1,
    },
  },
  props => ({
    ...(props.active && {
      opacity: 1,
      color: 'var(--kukui-primary)',
    }),
  })
);

const TableSortableLabelIcon = styled('span')<TableSortableLabelProps>(
  {
    opacity: 0,
    color: 'var(--kukui-accent-400)',
    fontSize: 13,
    marginRight: 4,
    marginLeft: 4,
    userSelect: 'none',
    transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s',
  },
  props => ({
    ...(props.active && {
      opacity: 1,
      color: 'var(--kukui-primary)',
    }),
    ...(props.direction === 'desc' && {
      transform: 'rotate(0deg)',
    }),
    ...(props.direction === 'asc' && {
      transform: 'rotate(180deg)',
    }),
  })
);

const TableSortableLabel = React.forwardRef<
  HTMLSpanElement,
  TableSortableLabelProps
>((inProps, ref) => {
  const { active, direction = 'asc', onClick, children, ...other } = inProps;

  return (
    <TableSortableLabelRoot
      ref={ref}
      direction={direction}
      active={active}
      onClick={onClick}
    >
      {children}
      <TableSortableLabelIcon
        as={ArrowDownSolid}
        active={active}
        direction={direction}
        className="KukuiSortableLabelIcon"
      />
    </TableSortableLabelRoot>
  );
});

TableSortableLabel.displayName = 'TableSortableLabel';

export default TableSortableLabel;
