import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M302.9 99.43c-25.37-20.56-49.36-39.98-66.49-61.41C233.2 34.01 228.6 32 224 32s-9.2 2.01-12.5 6.02c-17.1 21.43-41.1 40.85-66.4 61.41C80.44 151.7 0 216.8 0 352c0 70.7 57.31 128 128 128h192c70.69 0 128-57.3 128-127.1 0-136.1-80.4-201.2-145.1-253.47zM165.5 124.1c21.2-17.2 41.4-33.62 58.5-51.72 17.09 18.11 37.4 34.57 58.83 51.94C345.2 174.8 415.1 232.1 415.1 352H32c.01-119.9 70.8-177.2 133.5-227.9zM320 448H128c-41.67 0-76.86-26.84-90.11-64.01h372.2C396.9 421.2 361.7 448 320 448z" />
  </svg>
);

const SvgChestnut = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChestnut;
