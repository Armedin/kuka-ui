import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 232c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.7 24-24-10.8-24-24-24zm0-104.9c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128c0-69.8-57.3-128-128-128zm0 224.9c-52.93 0-96-43.07-96-96 0-52.94 43.07-96 96-96 52.94 0 96 43.06 96 96 0 52.9-43.1 96-96 96zm0-352C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgRecordVinyl = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRecordVinyl;
