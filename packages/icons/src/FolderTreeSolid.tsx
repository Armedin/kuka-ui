import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M544 32H432L400 0h-80c-17.62 0-32 14.38-32 32v160c0 17.62 14.38 32 32 32h224c17.62 0 32-14.38 32-32V64c0-17.62-14.4-32-32-32zm0 288H432l-32-32h-80c-17.62 0-32 14.38-32 32v160c0 17.62 14.38 32 32 32h224c17.62 0 32-14.38 32-32V352c0-17.6-14.4-32-32-32zM64 16c0-8.875-7.12-16-16-16H16C7.125 0 0 7.125 0 16v400c0 17.62 14.38 32 32 32h224v-64H64V160h192V96H64V16z" />
  </svg>
);

const SvgFolderTreeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFolderTreeSolid;
