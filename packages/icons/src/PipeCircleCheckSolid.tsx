import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M512 192.7V128c0-17.66-14.34-32-32-32s-32 14.34-32 32v70.62c15.3-4.32 31.4-6.62 48-6.62 5.4 0 10.7.3 16 .7zM32 96c-17.66 0-32 14.3-32 32v256c0 17.66 14.34 32 32 32s32-14.34 32-32V128c0-17.7-14.34-32-32-32zm384 115.2V128H96v256h224.7c-.4-5.3-.7-10.6-.7-16 0-68.4 39-127.7 96-156.8zm80 12.8c-79.5 0-144 64.5-144 144s64.48 144 144 144 144-64.48 144-144-64.5-144-144-144zm67.9 114.7-72 80a16.12 16.12 0 0 1-11.49 5.312c-4.385.096-8.641-1.568-11.74-4.672l-40-40c-6.24-6.273-6.24-16.38 0-22.66 6.271-6.24 16.38-6.24 22.66 0l28.06 28.1 60.7-67.46c5.92-6.592 16.03-7.104 22.59-1.215C569.3 322 569.8 332.1 563.9 338.7z" />
  </svg>
);

const SvgPipeCircleCheckSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPipeCircleCheckSolid;
