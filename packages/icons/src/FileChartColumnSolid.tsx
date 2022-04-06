import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M256 0v128h128L256 0zm-32 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V160H256.9c-18.6 0-32.9-14.3-32.9-32zm-96 307.3c0 6.3-6.4 12.7-12.7 12.7H76.8c-6.42 0-12.8-6.4-12.8-12.7v-70.5c0-6.4 6.38-12.8 12.75-12.8h38.5c6.35 0 12.75 6.4 12.75 12.8v70.5zm96 0c0 6.3-6.4 12.7-12.7 12.7h-38.5c-6.4 0-12.8-6.4-12.8-12.7V236.8c0-6.4 6.4-12.8 12.8-12.8h38.5c6.3 0 12.7 6.4 12.7 12.8v198.5zM268.8 288h38.5c6.3 0 12.7 6.4 12.7 12.8v134.5c0 6.3-6.4 12.7-12.7 12.7h-38.5c-6.4 0-12.8-6.4-12.8-12.7V300.8c0-6.4 6.4-12.8 12.8-12.8z" />
  </svg>
);

const SvgFileChartColumnSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileChartColumnSolid;
