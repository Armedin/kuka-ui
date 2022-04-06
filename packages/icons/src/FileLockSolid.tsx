import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M256 0v128h128L256 0zm287.1 320 .9-48c0-44.1-35.9-80-80-80s-80 35.9-80 80v48c-17.68 0-32 14.33-32 32.01v127.1c0 18.59 14.3 32.89 32 32.89h159.1c18.6 0 32.9-14.3 32.9-32.9V352c0-17.7-14.3-32-32.9-32zm-47.1 0h-64v-48c0-17.64 14.34-32 32-32s32 14.36 32 32v48zm-144-23.4V272c0-30.4 12.27-57.94 32-78.14V160H256c-17.67 0-32-14.33-32-32V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h280.9c-5.5-9.5-8.9-20.3-8.9-32.9V352c0-23.6 12.9-44.3 32-55.4z" />
  </svg>
);

const SvgFileLockSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileLockSolid;
