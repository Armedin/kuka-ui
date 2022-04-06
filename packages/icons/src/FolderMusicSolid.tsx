import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 96H272l-64-64H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zM352 352c0 17.62-21.5 32-48 32s-48-14.4-48-32 21.5-32 48-32c5.375 0 10.75.75 16 2v-76.4l-96 37.5V384c0 17.62-21.5 32-48 32s-48-14.4-48-32 21.5-32 48-32c5.375 0 10.75.75 16 2V239.3c0-7 4.5-13.2 11.3-15.3l128-47.25c4.7-1.45 10.1-.65 14.2 2.35s6.5 7.8 6.5 12.9v160z" />
  </svg>
);

const SvgFolderMusicSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFolderMusicSolid;
