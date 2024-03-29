import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M128 48c0 26.51-21.5 48-48 48-26.51 0-48-21.49-48-48S53.49 0 80 0c26.5 0 48 21.49 48 48zm464-16c26.5 0 48 21.49 48 48v64c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V80c0-26.51 21.5-48 48-48h320zm-16 64h-96v32h96V96zm16 224c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h320zm-16 64H352v32h224v-32zM96 128c35.3 0 64 28.7 64 64 0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32 0-35.3 28.65-64 64-64h32zm32 208c0 26.5-21.5 48-48 48-26.51 0-48-21.5-48-48s21.49-48 48-48c26.5 0 48 21.5 48 48zm-32 80c35.3 0 64 28.7 64 64 0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32 0-35.3 28.65-64 64-64h32z" />
  </svg>
);

const SvgPollPeopleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPollPeopleSolid;
