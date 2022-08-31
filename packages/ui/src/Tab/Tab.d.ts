/// <reference types="react" />
export interface TabProps {
    value?: any;
    label?: string;
    selected?: boolean;
    theme?: string;
    onClick?(): void;
    onChange?(event: React.SyntheticEvent, value: any): void;
}
declare const Tab: ({ value, label, selected, theme, onClick, onChange, }: TabProps) => JSX.Element;
export default Tab;
