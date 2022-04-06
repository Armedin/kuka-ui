import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M400 32H240C107.5 32 0 103.6 0 192c0 35.38 30.88 64 64 64v192c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32V256c33.13 0 64-28.62 64-64 0-88.4-107.5-160-240-160zm-16 208v208H96V240c0-8.8-7.16-16-16-16H64c-15.5 0-32-14.4-32-32 0-69.38 95.25-128 208-128s208 58.6 208 128c0 17.62-12.5 32-28 32h-20c-8.8 0-16 7.2-16 16zm160 208H416V256h128v192zm36-224H471.6c5.5-9.7 8.4-20.7 8.4-32 0-52.38-38-98.88-96.5-128H400c112.8 0 208 58.6 208 128 0 17.6-12.5 32-28 32z" />
  </svg>
);

const SvgBreadLoaf = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBreadLoaf;
