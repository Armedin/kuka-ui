import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M222.1 17.94c18.7-18.744 49.1-18.744 67.8 0L336 64h64c26.5 0 48 21.49 48 48v64l45.6 45.6c18.7 18.7 18.7 49.1 0 67.9L448 335.1V400c0 26.5-21.5 48-48 48h-64.9l-45.2 45.1c-18.7 18.8-49.1 18.8-67.8 0L176.9 448H112c-26.51 0-48-21.5-48-48v-64.9l-45.59-45.6c-18.743-18.8-18.743-49.2 0-67.9L64 176v-64c0-26.51 21.49-48 48-48h63.1l47-46.06zM232 152v112c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-13.3-10.7-24-24-24s-24 10.7-24 24zm24 168c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z" />
  </svg>
);

const SvgSealExclamationSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSealExclamationSolid;
