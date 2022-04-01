import React from 'react';
export interface TableHeadProps {
    children?: React.ReactNode;
    className?: string;
}
declare const TableHead: React.ForwardRefExoticComponent<TableHeadProps & React.RefAttributes<HTMLTableSectionElement>>;
export default TableHead;
