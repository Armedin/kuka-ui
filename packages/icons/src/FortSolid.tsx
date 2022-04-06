import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 16C0 7.164 7.164 0 16 0h32c8.84 0 16 7.164 16 16v48h32V16c0-8.836 7.2-16 16-16h32c8.8 0 16 7.164 16 16v48h32V16c0-8.836 7.2-16 16-16h32c8.8 0 16 7.164 16 16v144h128V16c0-8.836 7.2-16 16-16h32c8.8 0 16 7.164 16 16v48h32V16c0-8.836 7.2-16 16-16h32c8.8 0 16 7.164 16 16v48h32V16c0-8.836 7.2-16 16-16h32c8.8 0 16 7.164 16 16v160c0 20.9-13.4 38.7-32 45.3V464c0 26.5-21.5 48-48 48H384V384c0-35.3-28.7-64-64-64s-64 28.7-64 64v128H80c-26.51 0-48-21.5-48-48V221.3C13.36 214.7 0 196.9 0 176V16z" />
  </svg>
);

const SvgFortSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFortSolid;
