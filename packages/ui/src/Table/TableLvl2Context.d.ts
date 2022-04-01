import React from 'react';
export interface TableLvl2ContextProps {
    variant: 'head' | 'body' | 'footer';
}
declare const TableLvl2Context: React.Context<TableLvl2ContextProps | undefined>;
export default TableLvl2Context;
