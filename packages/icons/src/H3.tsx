import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M531.9 231.1h-62.84l146.5-139.5a16.016 16.016 0 0 0 3.812-17.52C616.9 67.97 611.1 64 604.5 64H384c-8.844 0-16 7.152-16 15.99s7.156 15.99 16 15.99h180.5L418 235.48a16.016 16.016 0 0 0-3.812 17.52 15.988 15.988 0 0 0 14.86 10.06h102.8C573.9 263.1 608 297.4 608 339.5s-34.13 76.33-76.06 76.33h-82.92c-22.64 0-42.67-14.49-49.83-36.04-2.781-8.37-11.84-12.93-20.23-10.12-8.391 2.78-12.92 11.84-10.14 20.24 11.53 34.64 43.75 57.9 80.2 57.9h82.92C591.5 447.8 640 399.2 640 339.5c0-59.8-48.5-108.4-108.1-108.4zM304 64.22c-8.844 0-16 7.152-16 15.99v159.9H32V80.21c0-8.839-7.156-15.99-16-15.99S0 71.37 0 80.21v351.8C0 440.8 7.156 448 16 448s16-7.2 16-16V272.1h256V432c0 8.8 7.2 16 16 16s16-7.152 16-15.99V80.21c0-8.84-7.2-15.99-16-15.99z" />
  </svg>
);

const SvgH3 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgH3;
