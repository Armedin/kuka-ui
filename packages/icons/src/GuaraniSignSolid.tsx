import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M224 32v34.66c39.5 6.64 75 25.37 102.4 52.24 12.6 12.4 12.8 32.6.5 45.2-12.4 12.7-32.7 12-45.3.5-15.8-15.5-35.5-26.9-57.6-32.6v92h128c17.7 0 32 14.3 32 32 0 95.1-69.2 174.1-160 189.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-34.7C69.19 430.1 0 351.1 0 256 0 160.9 69.19 81.89 160 66.65V32c0-17.67 14.3-32 32-32s32 14.33 32 32zm-64 100c-55.2 14.2-96 64.4-96 124 0 59.6 40.8 109.8 96 123.1V132zm64 247.1c44.1-10.7 80.4-47 91.1-91.1H224v91.1z" />
  </svg>
);

const SvgGuaraniSignSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGuaraniSignSolid;
