import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M176 288c44.1 0 80-35.9 80-80s-35.9-80-80-80-80 35.9-80 80 35.9 80 80 80zm368-160H304c-8.8 0-16 7.2-16 16v176H64V48c0-8.84-7.16-16-16-16H16C7.163 32 0 39.16 0 48v416c0 8.8 7.163 16 16 16h32c8.84 0 16-7.2 16-16v-48h512v48c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16V224c0-53.9-43-96-96-96z" />
  </svg>
);

const SvgBedSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBedSolid;
