import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M224 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V160H256.9c-18.6 0-32.9-14.3-32.9-32zm-87.5 310.5c-28.75-11.12-51.88-34.25-63-63-30.12-77.4 17.38-150.7 86.5-164.9V352h141.4c-14.1 69.1-87.5 116.6-164.9 86.5zM312.1 320H192V199.9c66.4 0 120.1 53.7 120.1 120.1zM256 0v128h128L256 0z" />
  </svg>
);

const SvgFileChartPieSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileChartPieSolid;
