import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 219.2v212.5c0 14.25 11.62 26.25 26.5 27 48.82 2.5 153.7 12.6 213.5 53.2V245.2C181.4 205.5 79.99 194.8 29.84 192 13.59 191.1 0 203.6 0 219.2zM482.2 192c-50.09 2.848-151.3 13.47-209.1 53.09-1 .11-1.1.21-1.1.41V512c60.04-40.39 164.7-50.76 213.5-53.28 14.9-.82 26.5-12.82 26.5-27.02V219.2c0-15.6-13.6-28.1-29.8-27.2zM352 96c0-53-43-96-96-96s-96 43-96 96 43 96 96 96 96-43 96-96z" />
  </svg>
);

const SvgBookOpenReaderSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBookOpenReaderSolid;
