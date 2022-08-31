import React from 'react';
export interface TabsProps {
    children?: React.ReactNode;
    theme?: 'default' | 'bordered';
    onChange?(event: React.SyntheticEvent, value: any): void;
}
declare const Tabs: ({ children, theme, onChange }: TabsProps) => JSX.Element;
export default Tabs;
