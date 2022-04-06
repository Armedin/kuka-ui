import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M384 0v128h128L384 0zm-32 128V0H176c-26.5 0-48 21.49-48 48v240h174.1l-39.03-39.03c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l80 80c9.375 9.375 9.375 24.56 0 33.94l-80 80c-9.375 9.375-24.56 9.375-33.94 0C258.3 404.3 256 398.2 256 392s2.344-12.28 7.031-16.97L302.1 336H128v128c0 26.5 21.5 48 48 48h288c26.51 0 48-21.49 48-48V160H384.9c-18.6 0-32.9-14.3-32.9-32zM24 288c-13.25 0-24 10.7-24 24 0 13.25 10.75 24 24 24h104v-48H24z" />
  </svg>
);

const SvgFileImportSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileImportSolid;
