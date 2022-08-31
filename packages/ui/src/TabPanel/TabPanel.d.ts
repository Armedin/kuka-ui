/// <reference types="react" />
export interface TabPanelProps {
    value: any;
    preload?: boolean;
    children?: React.ReactNode;
}
declare const TabPanel: ({ value, preload, children }: TabPanelProps) => JSX.Element;
export default TabPanel;
