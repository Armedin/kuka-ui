import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="m208 237.7 21.2 42.3h-42.4l21.2-42.3zM416 280c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm96-248c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h448zM229.5 173.3c-4.1-8.2-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-72 144c-5.9 11.8-1.1 26.2 10.8 32.2 11.8 5.9 26.2 1.1 32.2-10.8l5.3-10.7h90.4l5.3 10.7c6 11.9 20.4 16.7 32.2 10.8 11.9-6 16.7-20.4 10.8-32.2l-72-144zM416 212.1c-7.5-2.7-15.6-4.1-24-4.1-39.8 0-72 32.2-72 72s32.2 72 72 72c11.1 0 21.6-2.5 31-7.9 4.4 5.2 10.4 7.9 17 7.9 13.3 0 24-10.7 24-24V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v28.1z" />
  </svg>
);

const SvgRectangleAdSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRectangleAdSolid;