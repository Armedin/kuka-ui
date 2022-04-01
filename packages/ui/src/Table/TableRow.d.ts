import React from 'react';
import { SxProps } from '@kukui/system';
export interface TableRowProps {
    children?: React.ReactNode;
    className?: string;
    sx?: SxProps;
}
declare const TableRow: React.ForwardRefExoticComponent<TableRowProps & React.RefAttributes<HTMLTableRowElement>>;
export default TableRow;
