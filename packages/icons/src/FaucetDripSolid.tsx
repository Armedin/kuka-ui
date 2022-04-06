import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M416 480c0 17.62 14.38 32 32 32s32-14.38 32-32-32-64-32-64-32 46.4-32 64zm-64-288h-38.54c-15.76-13.5-35.56-23.1-57.46-28v-47.5l-32-3.5-32 3.5V164c-21.9 5-41.7 14.6-57.5 28H16c-8.875 0-16 7.1-16 16v96c0 8.9 7.125 16 16 16h92.78C129.4 357.8 173 384 224 384s94.59-26.25 115.2-64H352c17.62 0 32 14.29 32 31.91S398.4 384 416 384h64c17.62 0 32-14.38 32-32 0-88.4-71.6-160-160-160zM81.63 95.88l142.37-15 142.4 15c9.5 1 17.6-6.76 17.6-16.76V48.89c0-10-8.125-17.74-17.62-16.74L256 43.75V16c0-8.875-7.1-16-16-16h-32c-8.9 0-16 7.125-16 16v27.75L81.63 32.14c-9.5-1-17.63 6.75-17.63 16.75v30.23c0 10 8.13 17.76 17.63 16.76z" />
  </svg>
);

const SvgFaucetDripSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaucetDripSolid;
