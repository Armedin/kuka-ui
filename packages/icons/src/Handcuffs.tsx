import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M296 24c0 13.25-10.7 24-24 24s-24-10.75-24-24 10.7-24 24-24 24 10.75 24 24zM168 72c0-13.25 10.7-24 24-24s24 10.75 24 24-10.7 24-24 24-24-10.75-24-24zm88 280c0 53-43 96-96 96-53.9 0-96-43-96-96 0-53.9 42.1-96 96-96 53 0 96 42.1 96 96zm-96-64c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm0-168c13.3 0 24 10.7 24 24 22.1 0 40 17.9 40 40v21.3c56.5 24.7 96 81.1 96 146.7 0 88.4-71.6 160-160 160C71.63 512 0 440.4 0 352c0-65.6 39.49-122 96-146.7V184c0-22.1 17.9-40 40-40 0-13.3 10.7-24 24-24zm32 75.2V184c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v11.2c10.3-2.1 21-3.2 32-3.2 10.1 0 21.7 1.1 32 3.2zM160 224c-70.69 0-128 57.3-128 128s57.31 128 128 128c70.7 0 128-57.3 128-128s-57.3-128-128-128zm224 128c0-53.9 42.1-96 96-96 53 0 96 42.1 96 96 0 53-43 96-96 96-53.9 0-96-43-96-96zm96 64c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-64-232c0-22.1 17.9-40 40-40 0-13.3 10.7-24 24-24s24 10.7 24 24c22.1 0 40 17.9 40 40v21.3c56.5 24.7 96 81.1 96 146.7 0 88.4-71.6 160-160 160-47.4 0-90-20.6-119.3-53.3-5.8-6.6-5.3-17.6.4-22.6 7.5-5.9 17.6-5.4 23.5 1.2C408 463.5 442.1 480 480 480c70.7 0 128-57.3 128-128s-57.3-128-128-128c-37.9 0-72 16.5-95.4 42.7-5.9 6.6-16 7.1-23.5 1.2-5.7-5.9-6.2-16-.4-22.6 14.4-17 34.1-30.7 55.3-40V184zm32 11.2c10.3-2.1 21-3.2 32-3.2 10.1 0 21.7 1.1 32 3.2V184c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v11.2zM344 24c0-13.25 10.7-24 24-24s24 10.75 24 24-10.7 24-24 24-24-10.75-24-24zm80 48c0-13.25 10.7-24 24-24s24 10.75 24 24-10.7 24-24 24-24-10.75-24-24z" />
  </svg>
);

const SvgHandcuffs = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandcuffs;
