import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M434.7 416c-20.84 0-39.86-12.91-47.3-32.13-7.688-19.69-1.906-42.22 14.42-55.94l109.4-87.71C503 106.2 392.1 0 256 0 114.6 0 0 114.6 0 256s114.6 256 256 256c72.1 0 137.1-29.91 183.7-77.88l8.8-18.12h-13.8zM192 208c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64zm96 0c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64zm96 0c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64zm254.8 155.7c-2.7-7.1-9.7-11.7-17.5-11.7h-65.01l50.17-102.9c3.426-7.715.838-16.7-6.199-21.64-7.111-4.977-16.74-4.539-23.26 1l-154.7 123.1c-5.873 4.941-7.914 12.87-5.18 19.88C419.9 379.4 426.9 384 434.7 384h65.01l-50.17 102.9c-3.426 7.719-.838 16.7 6.199 21.64C458.1 510.9 462.8 512 466.7 512c4.412 0 8.787-1.492 12.29-4.445l154.7-124c5.81-4.955 7.81-12.855 5.11-19.855z" />
  </svg>
);

const SvgMeterBoltSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMeterBoltSolid;
