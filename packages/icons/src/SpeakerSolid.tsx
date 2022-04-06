import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM192 64c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm0 384c-61.81 0-112-50.17-112-112s50.2-112 112-112 112 50.17 112 112-50.2 112-112 112zm0-176c-35.31 0-64 28.67-64 64s28.69 64 64 64 64-28.67 64-64-28.7-64-64-64z" />
  </svg>
);

const SvgSpeakerSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSpeakerSolid;
