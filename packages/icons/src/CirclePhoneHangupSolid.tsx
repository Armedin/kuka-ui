import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm163.1 256.1-26.6 43.8c-3.988 6.396-11.99 9.015-19.06 6.253l-54.82-21.92c-6.441-2.596-10.41-9.16-9.717-16.06l3.446-34.61C275.9 221.1 236.1 221.1 199.6 233.6l3.447 34.61c.74 6.885-3.243 13.5-9.717 16.06L138.5 306.2c-7.037 2.797-15.1.1-19.06-6.253L92.05 256.1c-3.89-6.2-2.99-14.2 2.2-19.4 89.18-89.18 234.3-89.2 323.5 0 5.15 5.2 6.05 13.2 1.35 19.4z" />
  </svg>
);

const SvgCirclePhoneHangupSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCirclePhoneHangupSolid;
