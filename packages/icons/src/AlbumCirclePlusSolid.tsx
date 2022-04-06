import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v96.7c-5.3-.5-10.6-.7-16-.7-20.1 0-39.5 3.4-57.5 9.6C352.3 140 293.3 96 224 96c-88.4 0-160 71.6-160 160s71.6 160 160 160c12.9 0 25.4-1.5 37.4-4.4 6.5 25.5 17.7 48.7 34.8 68.4H64c-35.35 0-64-28.7-64-64V96zm192 160c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm96 112c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm160-64.9c0-7.9-7.2-16-16-16s-16 8.1-16 16v48h-48c-8.8 0-16 8.1-16 16 0 9.7 7.2 16 16 16h48v48c0 9.7 7.2 16 16 16s16-6.3 16-16v-48h48c8.8 0 16-6.3 16-16 0-7.9-7.2-16-16-16h-48v-48z" />
  </svg>
);

const SvgAlbumCirclePlusSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAlbumCirclePlusSolid;
