import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m476.6 270.2-57.18-28.47C397.8 230.9 384 208.7 384 184.5 384 82.62 301.5 0 199.5 0h-15C82.5 0 0 82.62 0 184.5V480c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32V327.5c0-24.2-13.8-46.4-35.4-57.3zM448 448H64v-96h32v56c0 4.4 3.63 8 8 8h16c4.4 0 8-3.6 8-8v-56h32v56c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-56h32v56c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-56h64v56c0 4.375 3.625 8 8 8h16c4.375 0 8-3.625 8-8v-56h32v56c0 4.375 3.625 8 8 8h16c4.375 0 8-3.625 8-8v-56h32v96z" />
  </svg>
);

const SvgPianoSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPianoSolid;
