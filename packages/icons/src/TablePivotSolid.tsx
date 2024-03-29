import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h64v128H0V96zm448 64H160V32h288c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V192h128v224h320V160zm-33.2 86.1c-2.5 6-8.3 9.9-14.8 9.9h-16v48c0 26.5-21.5 48-48 48h-48v16c0 6.5-3.9 12.3-9.9 14.8s-12.8 1.1-17.4-3.5l-32-32c-6.3-6.2-6.3-16.4 0-22.6l32-32c4.6-4.6 11.4-6 17.4-3.5 6 2.5 9.9 8.3 9.9 13.9v16h48c8.8 0 16-6.3 16-16v-48h-16c-6.5 0-12.3-3-14.8-9s-1.1-12.8 3.5-17.4l32-32c6.2-6.3 16.4-6.3 22.6 0l32 32c4.6 4.6 6 11.4 3.5 17.4z" />
  </svg>
);

const SvgTablePivotSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTablePivotSolid;
