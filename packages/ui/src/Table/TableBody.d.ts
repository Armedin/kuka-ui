import React from 'react';
export interface TableBodyProps {
    children?: React.ReactNode;
    className?: string;
}
declare const TableBody: React.ForwardRefExoticComponent<TableBodyProps & React.RefAttributes<HTMLTableSectionElement>>;
export default TableBody;
