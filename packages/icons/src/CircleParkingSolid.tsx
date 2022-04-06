import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M280 320h-48v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V168c0-22.1 17.9-40 40-40h72c53 0 96 42.1 96 96 0 53-43 96-96 96zm0-64c17.7 0 32-14.3 32-32s-14.3-32-32-32h-48v64h48zm232 0c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 64C149.1 64 64 149.1 64 256c0 106 85.1 192 192 192 106 0 192-86 192-192 0-106.9-86-192-192-192z" />
  </svg>
);

const SvgCircleParkingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleParkingSolid;
