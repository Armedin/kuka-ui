import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M96 128C96 57.31 153.3 0 224 0s128 57.31 128 128c0 70.7-57.3 128-128 128S96 198.7 96 128zm224 0c0-53.02-43-96-96-96-53.9 0-96 42.98-96 96 0 53 42.1 96 96 96 53 0 96-43 96-96zm128 351.1c0 18.6-14.3 32-32 32H32c-17.67 0-32-13.4-32-32v-8c0-82.9 61.33-152.3 141.6-165L224 416l82.4-109.9c80.3 12.7 141.6 82.1 141.6 165v8zM128.4 341.8C72.6 358.8 32 410.7 32 471.1v8h384v-8c0-60.4-40.6-112.3-96.4-129.3l-70 93.4c-6 8.1-15.5 12.8-25.6 12.8-10.1 0-19.6-4.7-25.6-12.8l-70-93.4z" />
  </svg>
);

const SvgUserVneck = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserVneck;
