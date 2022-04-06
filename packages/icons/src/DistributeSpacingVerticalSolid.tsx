import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 56c0-13.25 10.75-24 24-24h464c13.3 0 24 10.75 24 24s-10.7 24-24 24H24C10.75 80 0 69.25 0 56zm96 152c0-26.5 21.5-48 48-48h224c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48v-96zm392 224c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h464z" />
  </svg>
);

const SvgDistributeSpacingVerticalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDistributeSpacingVerticalSolid;
