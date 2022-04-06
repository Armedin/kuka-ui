import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M272 504c0 4.375-3.625 8-8.002 8H55.98c-4.377 0-8.002-3.625-8.002-8 0-22.12 17.88-40 40.01-40h40.01V346.9c-68.52-16-118-79.99-111.4-154.2L32.47 14.5C33.22 6.25 40.1 0 48.23 0h85.6l32.88 48.25-85.52 56L202.7 224l-49.5-104.2 85.52-56L208.2 0h63.56c8.127 0 15 6.25 15.75 14.5l15.88 178.1c6.625 74.25-42.88 138.2-111.4 154.1V464H232c22.1 0 40 17.9 40 40z" />
  </svg>
);

const SvgWineGlassCrackSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWineGlassCrackSolid;
