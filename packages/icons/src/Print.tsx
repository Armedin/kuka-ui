import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M416 320H96c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32V352c0-17.7-14.3-32-32-32zm0 160H96V352h320v128zm32-288V70.63c0-8.49-3.4-16.63-9.4-22.63L399.97 9.37C393.1 3.37 385.9 0 377.4 0H128C92.65 0 64 28.65 64 64v128c-35.3 0-64 28.7-64 64v112c0 8.8 7.156 16 16 16s16-7.2 16-16V256c0-17.67 14.33-32 32-32h384c17.67 0 32 14.33 32 32v112c0 8.844 7.156 16 16 16s16-7.156 16-16V256c0-35.3-28.7-64-64-64zm-32 0H96V64c0-17.67 14.33-32 32-32h249.4L416 70.63V192zm16 56c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.3-10.7-24-24-24z" />
  </svg>
);

const SvgPrint = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPrint;
