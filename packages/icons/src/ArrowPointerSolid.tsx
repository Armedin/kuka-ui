import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M318.4 304.5a23.998 23.998 0 0 1-22.45 15.52h-105l45.15 94.82c9.496 19.94 1.031 43.8-18.91 53.31-19.95 9.504-43.82 1.035-53.32-18.91L117.3 351.3l-75 88.25a23.96 23.96 0 0 1-18.28 8.453c-2.781 0-5.578-.484-8.281-1.469C6.281 443.1 0 434.1 0 423.1V56.02c0-9.438 5.531-18.03 14.12-21.91 8.63-3.85 18.71-2.34 25.75 3.88l271.1 240c8.43 6.61 10.13 17.11 7.43 26.51z" />
  </svg>
);

const SvgArrowPointerSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowPointerSolid;
