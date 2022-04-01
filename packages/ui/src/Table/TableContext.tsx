import React from 'react';

export interface TableContextProps {
  stickyHeader?: boolean;
}

const TableContext = React.createContext<TableContextProps | undefined>(
  undefined
);

export default TableContext;
