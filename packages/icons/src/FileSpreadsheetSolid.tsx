import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M296 368h-48v48h48v-48zM256 0v128h128L256 0zm40 288h-48v48h48v-48zm-80 0h-48v48h48v-48zm0 80h-48v48h48v-48zm-80 0H88v48h48v-48zm88-240V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V160H256.9c-18.6 0-32.9-14.3-32.9-32zm104 112v192c0 8.875-7.125 16-16 16H72c-8.875 0-16-7.125-16-16V240c0-8.875 7.125-16 16-16h240c8.9 0 16 7.1 16 16zm-192 48H88v48h48v-48z" />
  </svg>
);

const SvgFileSpreadsheetSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileSpreadsheetSolid;
