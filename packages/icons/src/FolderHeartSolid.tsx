import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 96H272l-64-64H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zM348.7 294.3l-82.97 85.56c-5.387 5.504-14.04 5.504-19.42 0L163.3 294.3c-24.1-25-22.6-66.2 4.3-89.2 23.5-20.02 58.39-16.39 79.81 5.753l8.49 8.847 8.416-8.778c21.55-22.14 56.55-25.77 79.93-5.753C371.3 228.1 372.8 269.3 348.7 294.3z" />
  </svg>
);

const SvgFolderHeartSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFolderHeartSolid;
