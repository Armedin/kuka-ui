import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M416 96H64c-35.35 0-64 28.65-64 64v192c0 35.35 28.65 64 64 64h352c17.67 0 32-14.33 32-32V128c0-17.7-14.3-32-32-32zm0 288H64c-17.64 0-32-14.36-32-32V160c0-17.64 14.36-32 32-32h352v256zm176-256h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16 7.2 16 16v160c0 8.828-7.188 16-16 16h-96c-8.844 0-16 7.156-16 16s7.156 16 16 16h96c26.47 0 48-21.53 48-48V176c0-26.5-21.5-48-48-48zm-40 96h16c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm-8 88c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v16z" />
  </svg>
);

const SvgUsbDrive = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUsbDrive;
