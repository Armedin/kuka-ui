import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M368.4 18.34c21.9-21.866 57.3-21.866 79.2 0l46.1 46.06c21.8 21.87 21.8 57.3 0 79.2l-55.8 55.7L312.7 74.06l55.7-55.72zm49 205.66-46 153.3c-6 19.9-21.2 35.7-40.9 42.3L66.17 508.2c-11.34 3.8-23.85 1-32.43-7.3L187.3 347.3c6.3 3 13.3 4.7 19.8 4.7 27.4 0 48-21.5 48-48s-20.6-48-48-48c-25.6 0-48 21.5-48 48 0 7.4 2.6 14.4 5.6 20.7L11.11 478.3a32.113 32.113 0 0 1-7.345-32.5L92.39 181.5c5.71-19.7 22.41-34.9 42.31-40.9l152.4-46L417.4 224z" />
  </svg>
);

const SvgPenNibSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPenNibSolid;
