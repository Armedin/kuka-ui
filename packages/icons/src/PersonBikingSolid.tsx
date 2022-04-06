import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M352 48c0-26.51 21.5-48 48-48s48 21.49 48 48-21.5 48-48 48-48-21.49-48-48zm128 111.1c17.7 0 32 15.2 32 32 0 18.6-14.3 32-32 32h-64c-7.3 0-14.3-1.6-20-7l-40.7-31.7-60.3 48.5 42.8 28.5c8.9 5.9 14.2 15.9 14.2 26.6v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V305.1l-60.5-38.3c-32.8-21.7-35-67.9-4.3-91.6l83.1-64.3c17.5-13.45 41.8-13.32 59.1.3l61.8 47.9H480zM256 384c0 70.7-57.3 128-128 128C57.31 512 0 454.7 0 384s57.31-128 128-128c70.7 0 128 57.3 128 128zm-128-72c-39.76 0-72 32.2-72 72s32.24 72 72 72c39.8 0 72-32.2 72-72s-32.2-72-72-72zm512 72c0 70.7-57.3 128-128 128s-128-57.3-128-128 57.3-128 128-128 128 57.3 128 128zm-128-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z" />
  </svg>
);

const SvgPersonBikingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonBikingSolid;
