import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 448c61.88 0 112-50.13 112-112-.1-61.9-50.1-111.9-112-112-61.88 0-112 50.13-112 112s50.1 112 112 112zm0-192c44.13 0 80 35.88 80 80s-35.9 80-80 80-80-35.88-80-80 35.9-80 80-80zm0 104c13.25 0 24-10.75 24-24s-10.7-24-24-24-24 10.75-24 24 10.8 24 24 24zM320 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zm32 448c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.33-32-32V192h320v256zm0-288H32V64c0-17.67 14.33-32 32-32h256c17.67 0 32 14.33 32 32v96z" />
  </svg>
);

const SvgMp3Player = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMp3Player;
