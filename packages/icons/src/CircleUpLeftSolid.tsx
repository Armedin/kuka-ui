import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm101.8 335.2-22.63 22.62c-12.5 12.5-32.72 12.54-45.21.042L222.1 289.9l-45.25 45.25a15.994 15.994 0 0 1-17.44 3.469 15.984 15.984 0 0 1-9.877-14.78v-158.4c0-8.836 7.162-16 15.1-16h158.4c6.475 0 12.31 3.891 14.78 9.875 2.484 5.977 1.104 12.86-3.471 17.44l-45.25 45.25 67.92 67.92C370.4 302.5 370.3 322.7 357.8 335.2z" />
  </svg>
);

const SvgCircleUpLeftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleUpLeftSolid;
