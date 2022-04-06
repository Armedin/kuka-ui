import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M276.8 399.9c-2.6-9.4-10.9-15.8-20.6-15.9-10.72-.906-18.09 6.172-20.88 15.59-3.344 11.61-8.562 19.42-13.56 26.83C215.3 435.1 208 446.7 208 462.6c0 27.2 21.5 49.4 48 49.4s48-22.2 48-49.4c0-15.89-7.312-26.66-13.75-36.16-4.95-7.44-10.15-15.04-13.45-26.54zM256 480c-8.812 0-16-7.812-16-17.42 0-5.797 2.531-9.766 8.25-18.22 2.45-3.56 5.05-7.56 7.75-12.16 2.656 4.609 5.344 8.562 7.781 12.17C269.5 452.8 272 456.8 272 462.6c0 9.6-7.2 17.4-16 17.4zm-107.2-80.1c-2.6-9.4-10.9-15.8-20.6-15.9-9.594 0-18.09 6.234-20.88 15.59-3.344 11.61-8.562 19.42-13.56 26.83C87.31 435.1 80 446.7 80 462.6c0 27.2 21.5 49.4 47.1 49.4s48.9-22.2 48.9-49.4c0-15.89-7.312-26.66-13.75-36.16-4.95-7.44-10.15-15.04-13.45-26.54zM128 480c-8.812 0-16-7.812-16-17.42 0-5.797 2.531-9.766 8.25-18.22 2.45-3.56 5.05-7.56 7.75-12.16 2.656 4.609 5.344 8.562 7.781 12.17C141.5 452.8 144 456.8 144 462.6c0 9.6-7.2 17.4-16 17.4zm-16-145.4c0-15.89-7.312-26.66-13.75-36.16-5-7.391-10.19-15.02-13.5-26.62-2.66-9.42-10.87-15.72-20.56-15.82-9.6 0-18.1 6.2-20.91 15.7-3.344 11.61-8.531 19.28-13.53 26.69C23.31 307.1 16 318.7 16 334.6c0 27.25 21.53 49.48 47.1 49.48S112 361.8 112 334.6zM64 352c-8.812 0-16-7.812-16-17.42 0-5.797 2.531-9.766 8.25-18.22 2.44-3.56 5.09-7.56 7.75-12.16 2.656 4.609 5.344 8.578 7.781 12.17C77.47 324.8 80 328.8 80 334.6c0 9.6-7.19 17.4-16 17.4zm176-17.4c0-15.89-7.312-26.66-13.75-36.16-5-7.391-10.19-15.02-13.5-26.62-2.65-9.42-10.85-15.72-20.55-15.82-9.5-.8-18.1 6.2-20.9 15.7-3.344 11.61-8.531 19.28-13.53 26.69C151.3 307.1 144 318.7 144 334.6c0 27.25 21.53 49.48 47.1 49.48S240 361.8 240 334.6zM192 352c-8.812 0-16-7.812-16-17.42 0-5.797 2.531-9.766 8.25-18.22 2.45-3.56 5.05-7.56 7.75-12.16 2.656 4.609 5.344 8.578 7.781 12.17C205.5 324.8 208 328.8 208 334.6c0 9.6-7.2 17.4-16 17.4zm148.8-80.1c-2.6-9.4-10.9-15.8-20.6-15.9-9.594 0-18.09 6.234-20.88 15.59-3.344 11.61-8.562 19.42-13.56 26.83C279.3 307.1 272 318.7 272 334.6c0 27.25 21.53 49.48 47.1 49.48S368 361.8 368 334.6c0-15.89-7.312-26.66-13.75-36.16-4.95-7.44-10.15-15.04-13.45-26.54zM320 352c-8.812 0-16-7.812-16-17.42 0-5.797 2.531-9.766 8.25-18.22 2.45-3.56 5.05-7.56 7.75-12.16 2.656 4.609 5.344 8.562 7.781 12.17C333.5 324.8 336 328.8 336 334.6c0 9.6-7.2 17.4-16 17.4zm48-160h-16c0-82.74-63.38-150.2-144-158.4V15.1C208 7.163 200.8 0 192 0s-16 7.163-16 15.1v17.62C95.38 41.78 32 109.3 32 192H16c-8.837 0-16 7.2-16 15.1S7.163 224 15.1 224H368c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-304 0c0-70.58 57.41-128 128-128s128 57.42 128 128H64z" />
  </svg>
);

const SvgShowerDown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShowerDown;
