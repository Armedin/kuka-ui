import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 72c0-13.25 10.75-24 24-24h48c13.25 0 24 10.75 24 24v48c0 13.3-10.75 24-24 24h-8v96h64v-8c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-8H64v112c0 8.8 7.16 16 16 16h48v-8c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-8H80c-26.51 0-48-21.5-48-48V144h-8c-13.25 0-24-10.7-24-24V72zm64 40V80H32v32h32zm128 320v-32h-32v32h32zm-32-192v32h32v-32h-32zm0-144c0-8.84 7.2-16 16-16h320c8.8 0 16 7.16 16 16 0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16zm128 160c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H304c-8.8 0-16-7.2-16-16zm0 160c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H304c-8.8 0-16-7.2-16-16z" />
  </svg>
);

const SvgListTree = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgListTree;
