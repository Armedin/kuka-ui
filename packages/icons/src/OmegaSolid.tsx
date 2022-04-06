import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m416 480-96-.005c-17.67 0-32-14.4-32-32.08v-25.6c0-11.44 6.094-21.97 15.98-27.69C353.3 366.1 384 312.1 384 256c0-88.22-71.78-159.1-160-159.1S64 167.8 64 256c0 56.97 30.66 110.1 80.02 138.6 9.88 5.8 15.98 16.3 15.98 27.7v25.6c0 17.69-14.33 32.08-32 32.08l-96 .005c-17.67 0-32-14.31-32-32s14.33-32 32-32h35.3C24.89 374.4 0 316.8 0 256 0 132.5 100.5 32 224 32s224 100.5 224 223.1c0 60.75-24.89 118.4-67.3 160H416c17.67 0 32 14.31 32 32S433.7 480 416 480zm-95.8-57.7z" />
  </svg>
);

const SvgOmegaSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgOmegaSolid;
