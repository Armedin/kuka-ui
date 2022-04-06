import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M256 0v128h128L256 0zm-32 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V160H256.9c-18.6 0-32.9-14.3-32.9-32zm72 208c0 13.26-10.74 23.1-24 23.1h-56v56c-.9 14.2-10.7 24.9-24 24.9-13.27 0-24-10.74-24-23.1v-57.8h-56.9c-12.37 0-23.1-9.8-23.1-23.1 0-13.26 10.74-23.1 23.1-23.1H168v-57.8c0-12.4 10.7-23.1 24-23.1s23.1 10.74 23.1 23.1V312H272c13.3 0 24 10.7 24 24z" />
  </svg>
);

const SvgFilePlusSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFilePlusSolid;
