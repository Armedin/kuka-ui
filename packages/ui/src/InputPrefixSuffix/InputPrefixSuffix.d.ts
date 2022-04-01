import React from 'react';
export interface InputPrefixSuffixProps {
    children?: React.ReactNode;
    type: 'prefix' | 'suffix';
    className?: string;
    disablePointerEvents?: boolean;
}
declare const InputPrefixSuffix: React.ForwardRefExoticComponent<InputPrefixSuffixProps & React.RefAttributes<HTMLElement>>;
export default InputPrefixSuffix;
