import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M511.1 63.1v287.1c0 35.25-28.75 63.1-64 63.1h-144l-124.9 93.68c-7.875 5.75-19.12.05-19.12-9.7V413.3h-96c-35.25 0-64-28.75-64-63.1V63.1c0-35.25 28.75-63.1 64-63.1h384c36.12 0 64.02 28.75 64.02 63.1z" />
  </svg>
);

const SvgMessageSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageSolid;
