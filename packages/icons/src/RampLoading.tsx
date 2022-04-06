import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M32 64v277.7L0 400.4V64C0 28.65 28.65 0 64 0h256c35.3 0 64 28.65 64 64v336.4l-32-58.7V64c0-17.67-14.3-32-32-32H64c-17.67 0-32 14.33-32 32zm220.9 224c17.7 0 33.9 9.6 42.2 25.1l82.2 151.7c11.5 21.3-3.9 47.2-28.2 47.2H34.86c-24.25 0-39.683-25.9-28.134-47.2L88.85 313.1c8.39-15.5 24.55-26 42.25-26l121.8.9zM34.86 480H349.1L267 328.4c-2.8-5.2-8.2-8.4-14.1-8.4H131.1c-5.9 0-11.3 3.2-15 8.4L34.86 480z" />
  </svg>
);

const SvgRampLoading = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRampLoading;
