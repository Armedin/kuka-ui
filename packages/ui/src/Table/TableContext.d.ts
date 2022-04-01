import React from 'react';
export interface TableContextProps {
    stickyHeader?: boolean;
}
declare const TableContext: React.Context<TableContextProps | undefined>;
export default TableContext;
