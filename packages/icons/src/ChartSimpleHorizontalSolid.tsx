import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M48 320c-26.51 0-48-21.5-48-48v-32c0-26.5 21.49-48 48-48h352c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H48zm0 160c-26.51 0-48-21.5-48-48v-32c0-26.5 21.49-48 48-48h160c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H48zm336-368c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V80c0-26.51 21.49-48 48-48h288c26.5 0 48 21.49 48 48v32z" />
  </svg>
);

const SvgChartSimpleHorizontalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChartSimpleHorizontalSolid;
