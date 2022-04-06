import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M560 128h-32c-8.875 0-16 7.125-16 15.1v80h-32V176c0-8.875-7.125-16-16-16h-48V96h48c8.9 0 16-7.12 16-16V48c0-8.88-7.1-16-16-16h-32c-8.9 0-16 7.12-16 16v16h-48c-8.875 0-16 7.125-16 16v48H224V80c0-8.875-7.125-16-16-16h-48V48c0-8.88-7.1-16-16-16h-32c-8.9 0-16 7.12-16 16v32c0 8.88 7.1 16 16 16h48v64h-48c-8.875 0-16 7.125-16 16v48H64v-80c0-8.875-7.125-15.1-16-15.1H16c-8.875 0-16 7.125-16 15.1v128c0 8.875 7.125 16 16 16h48v80c0 8.875 7.125 16 16 16h48v80c0 8.875 7.125 16 16 16h96c8.875 0 16-7.125 16-15.1v-31.1c0-8.875-7.125-16-16-16h-48v-32h192v32h-48c-8.875 0-16 7.125-16 16v31.1c0 8.875 7.125 15.1 16 15.1h96c8.875 0 16-7.125 16-16v-80h48c8.875 0 16-7.125 16-16v-80h48c8.875 0 16-7.125 16-16V144c0-8.9-7.1-16-16-16zM224 320h-64v-96h64v96zm192 0h-64v-96h64v96z" />
  </svg>
);

const SvgAlien8BitSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAlien8BitSolid;
