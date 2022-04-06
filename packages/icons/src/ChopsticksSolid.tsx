import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M638.1 96.61c1.8 5.89 2.3 12.19 1.6 18.29-1.6 6.2-2.7 11.2-5.8 17.5-3 5.3-7.2 10-12.1 13.7L154.9 508.6c-3.4 2.5-7.7 3.7-12 3.2-4.2-.6-8.1-2.7-10.9-6-2.7-3.3-4.1-7.5-3.8-11.7.2-4.3 2.1-8.3 5.2-11.3l430-406.71c4.5-4.19 9.9-7.42 15.7-9.48 5.8-2.06 12-2.92 18.2-2.51 6.2.4 12.2 2.06 17.7 4.86 5.6 2.8 10.4 6.7 14.4 11.45 4 4.76 6.9 10.27 8.7 16.2zM29.28 505.2c-2.86 3.3-6.88 5.4-11.22 5.7-4.33.4-8.649-.9-12.03-3.6-3.381-2.8-5.566-6.7-6.094-11.1-.527-4.3.644-8.6 3.266-12.1L333.5 18.56c3.7-4.87 8.4-8.936 13.7-11.968A45.78 45.78 0 0 1 364.4.904c6.1-.72 12.3-.214 18.1 1.49 5.9 1.704 11.4 4.571 16.1 8.426 4.8 3.86 8.7 8.64 11.6 14.04 2.8 5.41 4.6 11.33 5.1 17.43.5 6.09-.2 12.23-2 18.05-1.9 5.81-5 11.19-9 15.82L29.28 505.2z" />
  </svg>
);

const SvgChopsticksSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChopsticksSolid;