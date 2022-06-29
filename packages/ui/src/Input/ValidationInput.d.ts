import React from 'react';
import { Control, ControllerProps } from 'react-hook-form';
export interface ValidationInputProps {
    name: string;
    control?: Control<any>;
    validation: ControllerProps['rules'];
    input: React.ReactElement;
}
declare const ValidationInput: ({ name, control, input, validation, }: ValidationInputProps) => JSX.Element;
export default ValidationInput;
