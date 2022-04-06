import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v96.7c-5.3-.5-10.6-.7-16-.7-20.1 0-39.5 3.4-57.5 9.6C352.3 140 293.3 96 224 96c-88.4 0-160 71.6-160 160s71.6 160 160 160c12.9 0 25.4-1.5 37.4-4.4 6.5 25.5 17.7 48.7 34.8 68.4H64c-35.35 0-64-28.7-64-64V96zm192 160c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm384 112c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-111.4 48h-65.2c-21 0-38.9 13.7-45.1 32.7 20.2 19.4 47.5 31.3 77.7 31.3 30.2 0 57.5-11.9 77.7-31.3-6.2-19-24.1-32.7-45.1-32.7zM432 288c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z" />
  </svg>
);

const SvgAlbumCircleUserSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAlbumCircleUserSolid;
