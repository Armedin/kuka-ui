import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M333.3 336c12.5-12.5 12.5-32.77 0-45.26l-224-226.75H192c17.67 0 31.99-14.33 31.99-31.1C223.1 14.32 209.7 0 192 0H32C23.16 0 15.16 3.578 9.371 9.367 3.578 15.16 0 23.16 0 31.1V192c0 17.67 14.32 31.1 31.99 31.1s32-13.4 32-31.1v-82.8L288 336c12.5 12.5 32.8 12.5 45.3 0zm-8-268.91c-17.5-3.09-33.9 8.82-36.9 26.29-2.906 17.44 8.844 33.91 26.28 36.84C391.9 143.2 448 209.5 448 288c0 88.22-71.78 160-160 160-78.47 0-144.8-56.06-157.8-133.3-2.9-17.4-19.1-29.4-36.86-26.3-17.41 2.938-29.19 19.44-26.25 36.88C85.25 433.5 178.2 512 288 512c123.5 0 224-100.5 224-224 0-109.9-78.5-202.78-186.7-220.91z" />
  </svg>
);

const SvgArrowUpLeftFromCircleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpLeftFromCircleSolid;
