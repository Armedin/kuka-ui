import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 80c0-26.51 21.49-48 48-48h128c26.5 0 48 21.49 48 48v112c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V80zm0 240c0-26.5 21.49-48 48-48h128c26.5 0 48 21.5 48 48v112c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V320zM464 32c26.5 0 48 21.49 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.51 21.5-48 48-48h160zM256 240c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48v-32zm208 112c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h160z" />
  </svg>
);

const SvgChartTreeMapSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChartTreeMapSolid;
