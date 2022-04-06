import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M297.4 9.372c12.5-12.496 32.7-12.496 45.2 0l96 96.028c12.5 12.5 12.5 32.7 0 45.2l-96 96c-12.5 12.5-32.7 12.5-45.2 0s-12.5-32.7 0-45.2l41.3-41.4H128c-35.35 0-64 28.7-64 64v32c0 17.7-14.33 32-32 32S0 273.7 0 256v-32C0 153.3 57.31 96 128 96h210.7l-41.3-41.37c-12.5-12.5-12.5-32.76 0-45.257v-.001zm-96 256.028c12.5-12.5 32.7-12.5 45.2 0l96 96c12.5 12.5 12.5 32.7 0 45.2l-96 96c-12.5 12.5-32.7 12.5-45.2 0s-12.5-32.7 0-45.2l41.3-41.4H96c-17.67 0-32 14.3-32 32v32c0 17.7-14.33 32-32 32S0 497.7 0 480v-32c0-53.9 42.98-96 96-96h146.7l-41.3-41.4c-12.5-12.5-12.5-32.7 0-45.2z" />
  </svg>
);

const SvgArrowsTurnRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowsTurnRightSolid;
