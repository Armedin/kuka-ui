import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M352 352h128c8.836 0 16-7.164 16-16s-7.2-16-16-16H352c-8.836 0-16 7.164-16 16s7.2 16 16 16zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V128h512v288zM32 96c0-17.64 14.36-32 32-32h448c17.64 0 32 14.36 32 32H32zm320 128h128c8.836 0 16-7.164 16-16s-7.2-16-16-16H352c-8.836 0-16 7.164-16 16s7.2 16 16 16zm0 64h128c8.836 0 16-7.164 16-16s-7.2-16-16-16H352c-8.836 0-16 7.164-16 16s7.2 16 16 16zm-160 0c35.35 0 64-28.65 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm0-96c17.64 0 32 14.36 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zM96 416c8.836 0 16-7.164 16-16 0-26.5 21.5-48 48-48h64c26.51 0 48 21.49 48 48 0 8.836 7.164 16 16 16s16-7.164 16-16c0-44.18-35.82-80-80-80h-64c-44.18 0-80 35.82-80 80 0 8.8 7.16 16 16 16z" />
  </svg>
);

const SvgIdCard = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgIdCard;
