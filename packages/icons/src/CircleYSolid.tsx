import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm122.2 183.6L280 298.2V376c0 13.25-10.75 24-24 24s-24-10.75-24-24v-77.8l-98.2-114.6c-8.6-10-7.5-25.2 2.6-33.8 10.08-8.625 25.22-7.438 33.84 2.594L256 252.5l85.78-100.1c8.641-10.05 23.77-11.27 33.84-2.594C385.7 158.4 386.8 173.6 378.2 183.6z" />
  </svg>
);

const SvgCircleYSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleYSolid;
