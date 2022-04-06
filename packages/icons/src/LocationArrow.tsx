import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M47.1 256c-14.39 0-27.55-10.8-30.5-25.8-2.95-15 5.13-30 19.28-35.8L387.9 50.38c11.9-4.88 25.6-2.12 34.7 6.99 9.1 9.12 11.9 22.82 7 34.75l-144 351.98c-5.8 14.2-20.8 22.2-35.8 19.3-15-3-26.7-16.1-26.7-31.4V256h-176zM256 224v208L400 80 47.1 224H256z" />
  </svg>
);

const SvgLocationArrow = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLocationArrow;
