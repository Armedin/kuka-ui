import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M144 128c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm-48 64c0-26.5-21.5-48-48-48S0 165.5 0 192s21.5 48 48 48 48-21.5 48-48zm208-64c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm96 16c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-32.8 156.8c-26.25-14.75-47.12-61.38-67.12-97.76C284.4 174.3 254.3 160 224 160s-60.4 14.3-76.1 43c-20.4 36.9-40.1 82.5-67.27 97.8C51.63 317.1 32 348.1 32 384c0 53.01 43 95.88 96 95.88 51.75 1.875 72.25-31.88 96-31.88s44.25 33.75 96 31.88c53 0 96-42.88 96-95.88 0-35.9-19.6-66.9-48.8-83.2z" />
  </svg>
);

const SvgPawSimpleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPawSimpleSolid;
