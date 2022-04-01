import React from 'react';
export interface TableCellProps {
    align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
    children?: React.ReactNode;
    className?: string;
    variant?: 'head' | 'body' | 'footer';
}
declare const TableCell: React.ForwardRefExoticComponent<TableCellProps & React.RefAttributes<HTMLTableCellElement>>;
export default TableCell;
