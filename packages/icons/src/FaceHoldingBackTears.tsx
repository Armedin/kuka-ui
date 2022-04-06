import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M320 240c17.7 0 32-14.3 32-32 17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32zm.6-123.6c-2.4-8.5 2.5-17.36 11-19.78 8.5-2.43 16.5 2.49 19.8 10.98l1.5 5.2c7 24.6 28.1 42.7 53.6 45.9l10.6 1.4c9.7 1.1 15 9.1 14.8 17-1 9-8.8 14.9-15.9 14.9 10 13.4 16 29.1 16 48 0 18-6 34.6-16 48v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-6.7c-9.8 4.3-20.6 6.7-32 6.7-44.2 0-80-35.8-80-80 0-41.5 31.5-75.6 71.1-79.6-9.2-10.8-16.8-24.1-21-38.8l-1.5-5.2zM352 288c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm-160-48c0 17.7-14.3 32-32 32s-32-14.3-32-32c17.7 0 32-14.3 32-32 17.7 0 32 14.3 32 32zM180.4 96.62c8.5 2.42 13.4 11.28 11 19.78l-1.5 5.2c-4.2 14.7-11.8 28-21.9 38.8 40.5 4 72 38.1 72 79.6v64c0 8.8-7.2 16-16 16s-16-7.2-16-16c-13.4 10-30 16-48 16-11.4 0-22.2-2.4-32-6.7v6.7c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32c-10.05-13.4-16-30-16-48 0-18.9 5.95-34.6 15.99-48-7.95 0-14.85-5.9-15.87-14.9-1.09-7.9 5.13-15.9 13.9-17l11.48-1.4c24.6-3.2 46.6-21.3 53.6-45.9l1.5-5.2c2.4-8.49 11.3-13.41 19.8-10.98zM160 192c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm161.9 177.5c5.8-6.7 15.9-7.4 22.6-1.6 6.7 5.8 7.4 15.9 1.6 22.6-17.2 19.8-47.3 41.5-90.1 41.5s-72.9-21.7-90.1-41.5c-5.8-6.7-5.1-16.8 1.6-22.6 6.7-5.8 16.8-5.1 22.6 1.6C203 384.4 224.9 400 256 400c31.1 0 52.1-15.6 65.9-30.5zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgFaceHoldingBackTears = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceHoldingBackTears;
