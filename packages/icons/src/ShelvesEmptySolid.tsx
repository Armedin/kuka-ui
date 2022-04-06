import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M608 0c-17.6 0-32 14.4-32 31.1V160H64V31.1C64 14.4 49.6 0 32 0S0 14.4 0 31.1v480h64v-32h512v32h64v-480C640 14.4 625.6 0 608 0zm-32 416H64V224h512v192z" />
  </svg>
);

const SvgShelvesEmptySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShelvesEmptySolid;
