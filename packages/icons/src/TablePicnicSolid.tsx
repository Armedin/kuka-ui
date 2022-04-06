import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 224h-74.33l-38.4-96H416c17.67 0 32-14.33 32-32s-14.33-32-32-32H96c-17.67 0-32 14.33-32 32s14.33 32 32 32h48.73l-38.43 96H32c-17.67 0-32 14.3-32 32 0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32 0-17.7-14.3-32-32-32zm-304.7 0 38.4-96h84.66l38.4 96H175.3zM34.28 404.1c-6.562 16.41 1.438 35.03 17.84 41.59C56 447.3 60.03 448 64 448c12.69 0 24.72-7.594 29.72-20.12L136.9 320H67.93l-33.65 84.1zM444.1 320h-68.94l43.15 107.9C423.3 440.4 435.3 448 448 448c3.969 0 8-.719 11.88-2.281 16.41-6.562 24.41-25.19 17.84-41.59L444.1 320z" />
  </svg>
);

const SvgTablePicnicSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTablePicnicSolid;
