import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M574.4 309.9c-5.594-16.75-23.69-25.91-40.48-20.23l-202.5 67.51c-17.22-22.01-43.57-36.41-73.54-36.97L165.7 43.75C156.9 17.58 132.5 0 104.9 0H32C14.33 0 0 14.33 0 32s14.33 32 32 32h72.94l92.22 276.7C174.7 358.2 160 385.3 160 416c0 53.02 42.98 96 96 96 52.4 0 94.84-42.03 95.82-94.2l202.3-67.44c16.78-5.56 24.98-23.76 20.28-40.46zM256 448c-17.67 0-32-14.33-32-32s14.32-31.1 31.1-31.1S288 398.3 288 416c0 17.7-14.3 32-32 32z" />
  </svg>
);

const SvgDollyEmptySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDollyEmptySolid;
