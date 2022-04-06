import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M200 256c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm-136 0c0-88.4 71.6-160 160-160s160 71.6 160 160-71.6 160-160 160S64 344.4 64 256zm160 128c70.7 0 128-57.3 128-128s-57.3-128-128-128S96 185.3 96 256s57.3 128 128 128zM384 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zm0 32H64c-17.67 0-32 14.33-32 32v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.67-14.3-32-32-32z" />
  </svg>
);

const SvgAlbum = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAlbum;
