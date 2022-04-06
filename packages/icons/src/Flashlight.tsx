import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M288 208h-32c-26.5 0-48 21.5-48 48s21.5 48 48 48h32c26.5 0 48-21.5 48-48s-21.5-48-48-48zm-.9 64h-32c-8.875 0-16-7.125-16-16s7.125-16 16-16h32c8.875 0 16 7.125 16 16 0 8.9-6.2 16-16 16zm320-176h-32c-59 0-116.5 17-166.6 48H64c-35.38 0-64 28.62-64 64v96c0 35.38 28.62 64 64 64h345.4c50.13 31 107.6 48 166.6 48h32c17.62 0 32-14.38 32-32V128c-.9-17.6-14.4-32-32.9-32zM512 376.5c-30.38-7.25-59.25-19.25-85.75-35.75L418.5 336H63.1C46.37 336 32 321.6 32 304v-96c0-17.62 14.37-32 31.1-32h355.4l7.75-4.75C452.8 154.8 481.6 142.8 512 135.5v241zm96 7.5h-32c-10.75 0-21.38-.625-32-1.875v-252.2C554.6 128.6 565.3 128 576 128h32v256z" />
  </svg>
);

const SvgFlashlight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFlashlight;
