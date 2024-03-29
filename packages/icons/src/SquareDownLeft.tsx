import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M64 480h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320c0 35.3 28.65 64 64 64zm0-32c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320c0 17.64-14.36 32-32 32H64zm220-80.8c16.16-.077 30.6-9.745 36.8-24.69 6.209-15 2.806-32.11-8.684-43.6l-20.29-20.29 50.91-50.91c15.6-15.6 15.6-40.97 0-56.57l-33.94-33.94c-15.6-15.6-40.97-15.6-56.57 0L201.4 188.1l-20.3-20.3c-11.5-11.5-28.6-14.9-43.6-8.7-15 6.3-24.7 20.8-24.7 37l-2.3 133.2c-.022 21.94 18.59 40.27 39.98 40.27L284 367.2zm-.1-32-133.7 2.353c-2.253 0-7.754-2.094-7.723-8.01l2.331-133.1c.018-8.201 9.132-10.47 13.67-5.933l42.91 42.91 73.54-73.54c3.116-3.116 8.198-3.117 11.31-.001l33.94 33.94c3.116 3.116 3.115 8.199 0 11.31l-73.54 73.54 42.91 42.91C294.8 326.8 290.7 335.2 283.9 335.2z" />
  </svg>
);

const SvgSquareDownLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareDownLeft;
