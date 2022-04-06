import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M72 416c0-13.3 10.75-24 24-24 13.3 0 24 10.7 24 24s-10.7 24-24 24c-13.25 0-24-10.7-24-24zM0 56C0 25.07 25.07 0 56 0h80c30.9 0 56 25.07 56 56v132.2l91.2-91.23c21.9-21.87 57.4-21.87 79.2 0L419 153.5c21.9 21.9 21.9 57.4 0 79.2L331.7 320H456c30.9 0 56 25.1 56 56v80c0 30.9-25.1 56-56 56H96c-53.02 0-96-43-96-96V56zm480 400v-80c0-13.3-10.7-24-24-24H299.7l-128 128H456c13.3 0 24-10.7 24-24zm-83.6-279.8-56.6-56.6c-9.4-9.4-24.6-9.4-33.9 0L192 233.5v181l204.4-204.4c9.4-9.4 9.4-24.6 0-33.9zM96 480c35.3 0 64-28.7 64-64V288H32v128c0 35.3 28.65 64 64 64zM32 256h128v-96H32v96zm0-128h128V56c0-13.25-10.7-24-24-24H56c-13.25 0-24 10.75-24 24v72z" />
  </svg>
);

const SvgSwatchbook = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSwatchbook;
