import React from 'react';
export interface TableSortableLabelProps {
    active?: boolean;
    children?: React.ReactNode;
    direction?: 'asc' | 'desc';
    onClick?(): void;
}
declare const TableSortableLabel: React.ForwardRefExoticComponent<TableSortableLabelProps & React.RefAttributes<HTMLSpanElement>>;
export default TableSortableLabel;
