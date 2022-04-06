import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M41.37 406.6c-12.49-12.5-12.49-32.7 0-45.2 12.5-12.5 32.76-12.5 45.26 0L128 402.7V287.1H32c-17.67 0-32-13.4-32-32 0-16.8 14.33-32 32-32h352V109.3l-41.4 41.3c-12.5 12.5-32.7 12.5-45.2 0s-12.5-32.7 0-45.2l96-96.028c12.5-12.496 32.7-12.496 45.2 0l96 96.028c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0L448 109.3v113.8h96c17.7 0 32 15.2 32 32 0 18.6-14.3 32-32 32H192v115.6l41.4-41.3c12.5-12.5 32.7-12.5 45.2 0s12.5 32.7 0 45.2l-96 96c-12.5 12.5-32.7 12.5-45.2 0l-96.03-96zM128 63.1c0-16.77 14.3-32 32-32s32 15.23 32 32v128h-64v-128zm320 256V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V319.1h64z" />
  </svg>
);

const SvgArrowDownUpAcrossLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownUpAcrossLineSolid;
