import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M346.8 32.5 224 52.9V16c0-8.875-7.125-16-16-16h-32c-8.875 0-16 7.125-16 16v36.9L37.25 32.5C17.75 29.25 0 44.25 0 64v192c0 19.75 17.75 34.75 37.25 31.5l154.8-25.75 154.8 25.75C366.3 290.8 384 275.8 384 256V64c0-19.75-17.7-34.75-37.2-31.5zM160 299.5V496c0 8.875 7.125 16 16 16h32c8.875 0 16-7.125 16-16V299.5l-32-5.25-32 5.25z" />
  </svg>
);

const SvgHammerWarSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHammerWarSolid;
