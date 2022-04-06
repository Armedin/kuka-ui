import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M640 240c0-79.5-64.5-144-144-144s-144 64.5-144 144c0 45.5 21.5 85.63 54.5 112h-173c33-26.4 54.5-66.5 54.5-112 0-79.5-64.5-144-144-144S0 160.5 0 240c0 74 56.12 134.4 128 142.4v1.6h384v-1.625C583.9 374.4 640 314 640 240zm-608 0c0-61.9 50.12-112 112-112s112 50.1 112 112-50.1 112-112 112c-61.88-.1-111.88-50.1-112-112zm464 112c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112c-.1 61.9-50.1 111.9-112 112z" />
  </svg>
);

const SvgVoicemail = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVoicemail;
