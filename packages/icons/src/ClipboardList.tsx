import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M112 128h160c8.8 0 16-7.2 16-16s-7.2-16-16-16h-24.88c5.48-9.45 8.88-20.28 8.88-32 0-35.35-28.65-64-64-64s-64 28.65-64 64c0 11.72 3.379 22.55 8.877 32H112c-8.8 0-16 7.2-16 16s7.2 16 16 16zm80-96c17.64 0 32 14.36 32 32s-14.36 32-32 32-32-14.36-32-32 14.4-32 32-32zm128 32c-8.844 0-16 7.156-16 16s7.2 16 16 16c17.64 0 32 14.34 32 32v320c0 17.66-14.36 32-32 32H64c-17.64 0-32-14.34-32-32V128c0-17.66 14.36-32 32-32 8.844 0 16-7.156 16-16s-7.16-16-16-16C28.7 64 0 92.72 0 128v320c0 35.28 28.7 64 64 64h256c35.3 0 64-28.72 64-64V128c0-35.28-28.7-64-64-64zM72 256c0 13.25 10.75 24 24 24 13.26 0 24-10.75 24-24 0-13.26-10.74-24-24-24-13.25 0-24 10.7-24 24zm24 72c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24 13.26 0 24-10.75 24-24 0-13.3-10.7-24-24-24zm208-88H176c-8.8 0-16 7.2-16 16s7.156 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 96H176c-8.8 0-16 7.2-16 16s7.156 16 16 16h128c8.844 0 16-7.156 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgClipboardList = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClipboardList;
