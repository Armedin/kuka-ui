import React from 'react';
export interface TableProps {
    children?: React.ReactNode;
    className?: string;
    stickyHeader?: boolean;
}
declare const Table: React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLTableElement>>;
export default Table;
