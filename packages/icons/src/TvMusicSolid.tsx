import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M240 320c26.5 0 48-14.4 48-32v-84.9l96-37.5v60.38c-5.2-1.28-10.6-1.98-16-1.98-26.5 0-48 14.4-48 32s21.5 32 48 32 48-14.4 48-32V112c0-5.125-2.375-9.875-6.5-12.88s-9.5-3.87-14.2-2.37L267.3 144c-6.8 2.1-11.3 8.3-11.3 15.3v98.75c-5.2-1.35-10.6-2.05-16-2.05-26.5 0-48 14.4-48 32s21.5 32 48 32zm272 128H127.1c-16.8 0-31.1 14.3-31.1 31.1s14.3 32.9 31.1 32.9h384c18.6 0 32.9-14.3 32.9-32s-14.3-32-32-32zM592 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h512v288z" />
  </svg>
);

const SvgTvMusicSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTvMusicSolid;
