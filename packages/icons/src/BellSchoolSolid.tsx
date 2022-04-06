import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 208c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zM0 208C0 93.12 93.12 0 208 0c114.9 0 208 93.12 208 208 0 114.9-93.1 208-208 208C93.12 416 0 322.9 0 208zm208 80c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0 160c54 0 103.9-17.9 144-48v64h40c18.6 0 34.7-10.6 42.7-26-11.4-8.8-18.7-22.5-18.7-38 0-26.5 21.5-48 48-48s48 21.5 48 48c0 19.4-11.5 36.1-28.9 43.7-11 39.5-47.7 68.3-91.1 68.3H112c-26.51 0-48-21.5-48-48v-64c40.1 30.1 89.1 48 144 48z" />
  </svg>
);

const SvgBellSchoolSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBellSchoolSolid;
