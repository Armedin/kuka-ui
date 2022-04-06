import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M64 95.1H0c0 123.8 100.3 224 224 224v128c0 18.5 14.4 32.9 31.1 32.9s32.9-14.4 32.9-32V320C288 196.3 187.7 95.1 64 95.1zM448 32c-84.25 0-157.4 46.5-195.8 115.3 27.75 30.12 48.25 66.88 59 107.5C424 243.1 512 147.9 512 32h-64z" />
  </svg>
);

const SvgSeedlingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSeedlingSolid;
