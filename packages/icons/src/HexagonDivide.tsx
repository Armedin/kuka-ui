import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M231.1 160c0-13.3 11.6-24 24-24 14.2 0 24.9 10.7 24.9 24s-10.7 24-24.9 24c-12.4 0-24-10.7-24-24zM352 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H159.1c-7.9 0-16-7.2-16-16s8.1-16 16-16H352zm-72 112c0 13.3-10.7 24-24.9 24-12.4 0-24-10.7-24-24s11.6-24 24-24c14.2 0 24.9 10.7 24.9 24zM169.1 32H342c25.1 0 48.5 13.1 61.5 34.56L496 218.6c14 23 14 51.8 0 74.8l-92.5 152c-13 21.5-36.4 34.6-61.5 34.6H169.1c-24.2 0-47.6-13.1-60.6-34.6l-92.54-152a71.866 71.866 0 0 1 0-74.8L108.5 66.56C121.5 45.1 144.9 32 169.1 32zM43.29 235.2c-7.77 11.9-7.77 28.8 0 41.6l92.51 152c7.3 11.9 20.2 19.2 33.3 19.2H342c13.1 0 26.9-7.3 34.2-19.2l92.5-152c7.8-12.8 7.8-29.7 0-41.6l-92.5-152C368.9 71.28 355.1 64 342 64H169.1c-13.1 0-26 7.28-33.3 19.2l-92.51 152z" />
  </svg>
);

const SvgHexagonDivide = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHexagonDivide;
