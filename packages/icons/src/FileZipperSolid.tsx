import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M256 0v128h128L256 0zm-32 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V160H256.9c-18.6 0-32.9-14.3-32.9-32zM96 32h64v32H96V32zm0 64h64v32H96V96zm0 64h64v32H96v-32zm32.3 255.1c-40.56 0-70.76-36.45-62.83-75.45L96 224h64l30.94 116.9c7.76 38.8-22.44 74.2-62.64 74.2zM144 336h-32c-8.8 0-16 7.2-16 16s7.164 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgFileZipperSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileZipperSolid;
