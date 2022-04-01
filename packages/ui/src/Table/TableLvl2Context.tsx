import React from 'react';

export interface TableLvl2ContextProps {
  variant: 'head' | 'body' | 'footer';
}

const TableLvl2Context = React.createContext<TableLvl2ContextProps | undefined>(
  undefined
);

export default TableLvl2Context;
