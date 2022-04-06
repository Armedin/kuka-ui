import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m208.1 137.8 143-43.2L481.4 224l-31.1 103.6 180.5 141.5c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196 13.29-1.236 28.37-3.065 38.81 5.112L208.1 137.8zm-140.33 308 78.63-234.5 85 67c-4.7 7.5-8.3 16.3-8.3 25.7 0 7.4 2.6 14.4 5.6 20.7L75.11 478.3c-8.3-8.6-11.15-21.1-7.34-32.5zM271.1 352c14.4 0 26.6-5.6 35.3-14.6l98.5 77.6c-3.3 1.8-6.8 3.4-10.4 4.6l-264.3 88.6c-11.4 3.8-23.9 1-32.46-7.3L251.3 347.3c6.3 3 13.3 4.7 20.7 4.7h-.9zM432.4 18.34c21.9-21.865 57.3-21.865 79.2 0l46.1 46.06c21.8 21.87 21.8 57.3 0 79.2l-55.8 55.7L376.7 74.06l55.7-55.72z" />
  </svg>
);

const SvgPenNibSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPenNibSlashSolid;
