import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M366.3 322.1c-6.125 6.376-5.906 16.5.469 22.63 1.03 1.016 1.562 2.219 1.562 3.672 0 1.375-.531 2.578-1.594 3.594l-53.78 51.7c-51.19 49.21-118.1 76.31-190.8 76.31-29.19 0-58.18-4.532-86.06-13.46-2.125-.688-3.531-2.125-3.97-4.126-.374-1.625.126-3.204 1.532-4.532l231.4-222.4c6.441-6.088 6.541-16.288.441-22.588-6.1-6.4-16.2-6.6-22.6-.5L11.6 434.7C2.038 443.811-1.93 456.84.98 469.47c2.906 12.94 12.31 23.19 25.31 27.46C57.4 506.1 89.68 512 122.2 512c80.15 0 155.8-30.27 212.1-85.25l53.78-51.69c7.343-7.079 11.41-16.55 11.41-26.57.063-10.2-3.1-19.74-11.44-26.86-5.55-6.13-15.65-5.93-21.75.47zM560.6 42.96l-29.9-28.72c-19.78-18.96-51.1-19.02-71.9 0L294.1 171.6c-4.437 4.329-6.968 10.35-6.968 16.5 0 6.251 2.594 12.31 7.062 16.58l95.4 91.79c4.344 4.126 9.1 6.392 15.94 6.392 5.156 0 10.25-1.766 14.41-5.063l30.78-24.86c9.906-9.486 15.37-22.19 15.37-35.8V208.9l93.65-94.19C570.5 105.2 576 92.42 576 78.8c0-13.61-5.5-26.34-15.4-35.84zm-22.4 48.92L435 195.68v41.47c0 4.86-1.906 9.236-4.469 11.77l-23.56 18.99-82.93-79.79 156.9-150.8c7.5-7.157 20.16-7.142 27.59-.016l29.94 28.77c3.625 3.454 5.531 7.845 5.531 12.7C544 83.69 542.1 88.13 538.2 91.88zM496 63.94c-8.836 0-15.1 7.163-15.1 16s7.164 16 15.1 16 15.1-7.165 15.1-16c.9-8.84-6.3-16-15.1-16zm-64 63.96c-8.836 0-15.1 7.163-15.1 16s7.164 16 15.1 16 15.1-7.165 15.1-16c.9-8.8-6.3-16-15.1-16z" />
  </svg>
);

const SvgKnifeKitchen = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgKnifeKitchen;