import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M232 256c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zM256 0c8.8 0 16 7.164 16 16v32.61C374.1 56.37 455.6 137.9 463.4 240H496c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32.6c-7.8 102.1-89.3 183.6-191.4 191.4V496c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32.6C137.9 455.6 56.37 374.1 48.61 272H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h32.61C56.37 137.9 137.9 56.37 240 48.61V16c0-8.836 7.2-16 16-16zm-16 431.3V384c0-8.8 7.2-16 16-16s16 7.2 16 16v47.3c84.4-7.6 151.7-74.9 159.3-159.3H384c-8.8 0-16-7.2-16-16s7.2-16 16-16h47.3C423.7 155.6 356.4 88.33 272 80.72V128c0 8.8-7.2 16-16 16s-16-7.2-16-16V80.72C155.6 88.33 88.33 155.6 80.72 240H128c8.8 0 16 7.2 16 16s-7.2 16-16 16H80.72C88.33 356.4 155.6 423.7 240 431.3z" />
  </svg>
);

const SvgCrosshairs = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCrosshairs;
