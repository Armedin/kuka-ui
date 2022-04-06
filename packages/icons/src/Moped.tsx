import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M336 48c0-8.84 7.2-16 16-16h40.9c20.7 0 39 13.22 45.6 32.82l5.1 15.48 56.7-28.32c5.2-2.62 11-3.98 16.8-3.98 14 0 26.9 12.03 26.9 26.87v74.23c0 14-12.9 26-26.9 26-5.8 0-11.6-.5-16.8-3.1l-32.2-15.6 26.4 75.7c5.8.2 11.6-1 17.5-1 41.5 0 79.1 17.5 106.5 44.4 6.3 6.2 6.4 16.4.2 22.7-6.2 6.3-16.3 6.4-22.6.2-21.7-21.3-51.4-34.4-84.1-34.4-56.5 0-104 39.1-116.7 91.8-2.1 9-3.3 18.4-3.3 28.2H256c0 53-43 96-96 96-53.9 0-96-43-96-96H32c-17.67 0-32-14.3-32-32v-32c0-70.7 57.31-128 128-128h96c17.7 0 32 14.3 32 32v96c0 17.7 14.3 32 32 32h75.4c.2-1.3.5-2.5.8-3.8 12.3-50.7 50-91.6 98.9-108.2l-55-165.06C405.9 68.41 399.8 64 392.9 64H352c-8.8 0-16-7.16-16-16zm118.7 65.5c.1 0-.6.1.5.2l56.8 28.4V81.89l-56.8 28.41c-.5.2-.9.4-1.4.6l.9 2.6zM224 224h-96c-53.02 0-96 42.1-96 96v32h200.6c-5.5-9.4-8.6-20.3-8.6-32v-96zm0 160H96c0 35.3 28.7 64 64 64s64-28.7 64-64zm16-256c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16h128zm176 256c0-53.9 42.1-96 96-96 53 0 96 42.1 96 96 0 53-43 96-96 96-53.9 0-96-43-96-96zm96 64c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z" />
  </svg>
);

const SvgMoped = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMoped;
