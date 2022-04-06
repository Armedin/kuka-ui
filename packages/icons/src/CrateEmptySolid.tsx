import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 224H16c-8.875 0-16 7.125-16 16v112h512V240c0-8.9-7.1-16-16-16zM64 303.1c-8.875 0-16-7.123-16-15.1s7.125-16 16-16 16 7.122 16 15.1-7.12 16-16 16zm384 0c-8.875 0-16-7.125-16-16s7.1-15.1 16-15.1 16 7.125 16 16-7.1 15.1-16 15.1zM0 496c0 8.875 7.125 16 16 16h480c8.875 0 16-7.125 16-16V384H0v112zm448-64.9c8.875 0 16 7.126 16 16s-7.125 16-16 16-16-7.126-16-16 7.1-16 16-16zm-384 0c8.875 0 16 7.125 16 16S72.88 464 64 464s-16-7.125-16-16 7.12-16.9 16-16.9z" />
  </svg>
);

const SvgCrateEmptySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCrateEmptySolid;
