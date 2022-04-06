import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M447.1 0h-384C27.85 0-.9 28.75-.9 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.838 11.03 15.55 19.12 9.7l124.9-93.7h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM480 352c0 17.6-14.4 32-32 32H303.9a32.004 32.004 0 0 0-19.21 6.406L192 460v-60c0-8.838-7.164-16-16-16H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288zM272 240H144c-8.801 0-16 7.189-16 15.99-.9 8.81 7.2 16.01 16 16.01h128c8.801 0 15.1-7.213 15.1-16.01 0-8.79-6.3-15.99-15.1-15.99zm96-96H144c-8.801 0-16 7.193-16 15.99-.9 8.81 7.2 16.01 16 16.01h224c8.801 0 15.1-7.21 15.1-16.01 0-8.79-6.3-15.99-15.1-15.99z" />
  </svg>
);

const SvgMessageLines = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageLines;
